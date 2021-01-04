import {Type} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Entity} from '@ngx-metaui/rules';
import {Task} from '../model/task';

export function serialize<TModel>(data: TModel): string {
  return JSON.stringify(data);
}

/**
 *
 * Converts JSON object to actual Type. We don't care about primitive types as we dont have to
 * do anything with them. We do instantiate objects or complex types only.
 *
 *
 */
export function deserialize(json: any, clazz: Type<any>): any {
  if (Array.isArray(json)) {
    const instances = [];
    for (const item in json) {
      instances.push(this.deserialize(json[item], clazz));
    }
    return instances;
  } else {
    let instance;
    if (clazz === String) {
      instance = json.toString();
    } else if (clazz === Number || clazz === Boolean) {
      instance = json;
    } else {
      instance = new clazz();
      const types = instance.getTypes();

      for (const prop in json) {
        if (!json.hasOwnProperty(prop)) {
          continue;
        }

        if (types[prop] && json[prop] && types[prop] !== Date) {
          instance[prop] = deserialize(json[prop], types[prop]);

        } else if (isDate(types[prop])) {
          instance[prop] = new types[prop](json[prop]);

        } else {
          instance[prop] = json[prop];
        }

        // else if (isString(json[prop]) && isEntity(instance)
        //     && prop === (<Entity>instance).identity()) {
        //
        //     const idString = (<Entity>instance).identity();
        //     (<any>instance)[idString] = <string>json[prop];
        //
        // }


      }
    }

    return instance;
  }
}


export function isDate(obj: any): obj is Date {
  return (obj instanceof Date && !isNaN(obj.valueOf())) ||
    (obj && isFunction(obj.now));
}


export function isFunction(obj: any): boolean {
  return typeof obj === 'function';
}

/**
 * Simple save method which in real scenario would be handled as part of State Management subsystem. All CRUD would
 *
 */
export function save<TModel extends Entity>(item: TModel, form: FormGroup, collectionName?: string,
                                            prefix?: string): void {
  Object.keys(form.controls).forEach(field => {
    const control = form.get(field);
    control.markAsTouched({onlySelf: true});
  });
  if (form.valid) {
    const collection = localStorage.getItem(collectionName) || '[]';
    if (collection) {
      const items: any[] = JSON.parse(collection);
      if (item['uniqueName']) {
        const fragments = item.identity().split('-');
        const internalId = parseInt(fragments[1]);
        items[internalId - 1] = item;
      } else {
        item['uniqueName'] = `${prefix}${(items.length + 1)}`;
        items.push(item);
      }
      localStorage.setItem(collectionName, JSON.stringify(items));
      localStorage.removeItem('in-progress');
    }
  }
}


export function saveRaw<TModel extends Entity>(data: TModel, collectionName?: string): void {
  const item: TModel = data;
  const collection = localStorage.getItem(collectionName) || '[]';
  if (collection) {
    const items: any[] = JSON.parse(collection);
    if (item['uniqueName']) {
      const fragments = item.identity().split('-');
      const internalId = parseInt(fragments[1]);
      items[internalId - 1] = item;
    }
    localStorage.setItem(collectionName, JSON.stringify(items));
  }
}

export function load<TModel>(id?: number, collectionName?: string): TModel {
  let found: TModel = null;
  if (id) {
    const collection = localStorage.getItem(collectionName);
    if (collection) {
      const items: any[] = JSON.parse(collection);
      items.forEach((item) => {
        if (id === item['uniqueName']) {
          found = deserialize(item, Task);
        }
      });
    }
  } else {
    const itemInProgress = localStorage.getItem('in-progress');
    if (itemInProgress) {
      found = deserialize(itemInProgress, Task);
    }
  }
  return found;
}
