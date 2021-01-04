import {Entity} from '@ngx-metaui/rules';

export class Project implements Entity {


  constructor(
    public uniqueName?: string,
    public name?: string,
    public prefix?: string,
    public description?: string
  ) {
  }

  identity(): string {
    return this.uniqueName;
  }


  getTypes(): any {
    return {
      uniqueName: String,
      name: String,
      prefix: String,
      description: String
    };
  }


  /**
   * Used by MetaUI to identify the name of the class once everything is minified
   */
  className(): string {
    return 'Project';
  }

  toString(): string {
    return this.name;
  }
}
