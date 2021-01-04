# SmeshTaks

**Smesh Task** is fictional Task management tool which demonstrates power of 
[Meta UI](https://docs.metaui.io/fundamentals/rules) in order to generate fully functional applications. It combines application 
logic which most likely would be part of the library but for demonstration purposes we are exposing some of the details here
 and `Object Styles Sheets` that glues everything together.
  

## Features

This sample shows some important concepts of MetaUI:
* Landing page assembly 
* Navigation
* Create / Edit / View Tasks
* Detail pages for `User` and `Project` types



### Landing Page

The main application structure is created using **Modules** which is a unique high level concept 
to build main application structure along with global navigation. Currently implemented as `Tabs`

```scss
@module=Home {
  label:"Home";

   @layout=News {
     after:zTop;
     label: "News";
     component:NewsComponent;
   }

   @layout=Tasks {
      after:zMain;
      label: "My Tasks";
      component:MyDocumentsComponent;
   }

   @layout=Stats {
      after:Tasks;
      label: "My Activities";
      component:StatsComponent;
   }

   @layout=Actions {
      label:"Actions";
      component:MetaActionListComponent;
      after:zToc;
      bindings: {
       renderAs:"links";
      };
   }

}

@module=Projects {
  label:"Projects";
  homePage:"projects";
}


@module=Users {
  label:"Users";
  homePage:"users";
}

@module=Assets {
  label:"Assets";
  homePage:"assets";
}
```

* The above code demonstrates both creating custom page layout using `@layout` seletors and connecting 
custom application pages to serve as global navigation.
* This also shows simple example how to work with actions. You set different properties, condition or different 
action categories.  

```scss
module {
  appTitle:"Smash";
  appIcon:"/assets/logo.png";


  @actionCategory=Create {
      @action=Task#pageAction {
          icon:"sales-order-item";
          routeName:"/demo/tasks/create";
      }

      @action=Project#pageAction {
          icon:"money-bills";
          routeName:"/demo/projects/create";
      }

      @action=Report#pageAction {
          icon:"customer-order-entry";
          routeName:"/demo/reports/create";
      }
  }
}
```

### Navigation

Above `Modules` it enable us to navigate between pages as well as and it integrates with Angular 
router to bind it with some application level routes. 

### Create / Edit / View Tasks

In order to deal with complex domain classe and to navigate between different edibility modes we use `class` and `field` OSS selectors.  [Please read more about different features of OSS](https://docs.metaui.io).

```scss
class=Task {
  field=uniqueName {
    label: "Id";
  }
  field=name {
    label: "Title";
    trait: required;
    placeholder: "Unique name that identifies this Task";
  }
  field=(reporter,assignee) {
    trait:asAutoComplete, withDetail, required;
    placeholder: "Select a user";
    lookupKey: "fullName";
  }
}

class=Task {
   operation=(create, edit) {
      zNone => *;
      zLeft  => name#fluid =>  reporter => assignee => dueDate => category;
      zRight => project =>  status => priority;
      zBottom => description;
   }

    operation=view {
      zNone => *;
      zLeft  => title#fluid => name => assignee => reporter => project => status;
      zRight  => priority => dueDate => createdDate => category;
      zBottom  => description;
    }
}
```  
* You can see different  [selectors](https://docs.metaui.io/understand-your-rules)  that can be nested just like sass.
* It also defines object level actions:
```scss
  action=(reset, save) {
      trait:controllerAction;
      visible:${properties.get('editing') === true};
  }


  action=edit {
      trait:controllerAction;
      visible:${properties.get('editing') === false};
  }

  action=(edit, save) {
    buttonOptions:"emphasized";
  }
```
### Detail pages  for `User` and `Project` types

When we work with nested objects we always needs some way how to display these details. We can navigate to a 
detail page or show some overlay panel or even dialog. This example demonstrates how for each complex object (User, Project)
it automatically wrap the read-only value with a link and builds new detail page on the fly. 

This is just matter of assigning proper trait to a field (Traits is similar to Mixins)
```scss
 field=reporter {
    trait:withDetail;    
 }
```


## Next
In the next upcoming weeks & moths we are going to update this sample with newest version of UI Library as well with some more features. 

* Did you know that developers spend 30% of their time with State management questions?   
* How do you deal with different business rules? 
    * Add validity, visibility and editability condition if this or that happens
    * Show this field if this or that user is looking at this.
    * Reorganize layout and fields differently with this persona is working with the application
    * much more
* Do you even deal with Defaulting in your application?  



## How To Run

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

