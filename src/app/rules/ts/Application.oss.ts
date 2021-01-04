/**
 *  This is generated file. Do not edit !!
 *
 *  @formatter:off
 *
 */
/* tslint:disable */
export const ApplicationRule = 'module {   appTitle:"Smash";   appIcon:"./assets/logo.png";     @actionCategory=Create {       @action=Task#pageAction {           icon:"sales-order-item";           routeName:"/demo/tasks/create";       }        @action=Project#pageAction {           icon:"money-bills";           routeName:"/demo/projects/create";       }        @action=Report#pageAction {           icon:"customer-order-entry";           routeName:"/demo/reports/create";       }   } }   @module=Home {   label:"Home";     @layout=News {      after:zTop;      label: "News";      component:NewsComponent;    }     @layout=Tasks {       after:zMain;       label: "My Tasks";       component:MyDocumentsComponent;    }     @layout=Stats {       after:Tasks;       label: "My Activities";       component:StatsComponent;    }     @layout=Actions {       label:"Actions";       component:MetaActionListComponent;       after:zToc;       bindings: {        renderAs:"links";       };    }  }   @module=Projects {   label:"Projects";   homePage:"projects"; }   @module=Users {   label:"Users";   homePage:"users"; }  @module=Assets {   label:"Assets";   homePage:"assets"; }    action {   detailRoute: "/demo/entity/detail";   @trait=controllerAction {       actionResults:${           m = properties.get("mRef");           m.call(this.controller, object);       };   } } ';
/* tslint:disable */
/**
 *  @formatter:on
 *
 */
 