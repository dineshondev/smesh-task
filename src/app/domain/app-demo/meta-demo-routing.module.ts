import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {MetaContentPageComponent, MetaHomePageComponent} from '@ngx-metaui/fiori-rules';
import {EntityResolver} from '../rest/entity-resolver.service';
import {AssetsLandingComponent} from '../../landing-pages/assets/assets-landing.component';
import {UsersLandingComponent} from '../../landing-pages/users/users-landing.component';
import {TaskComponent} from '../task/task.component';
import {ProjectsLandingComponent} from '../../landing-pages/projects/projects-landing.component';


const demoRouting: Routes = [
  {
    path: 'demo', component: HomeComponent,
    children: [
      {
        path: 'home',
        component: MetaHomePageComponent
      },
      {
        path: 'projects',
        component: ProjectsLandingComponent
      },
      {
        path: 'users',
        component: UsersLandingComponent
      },
      {
        path: 'assets',
        component: AssetsLandingComponent
      },
      {
        path: 'tasks/create',
        component: TaskComponent
      },
      {
        path: 'tasks/edit/:id',
        component: TaskComponent
      },
      {
        path: 'tasks/view/:id',
        component: TaskComponent
      },
      {
        path: 'entity/detail/:type/:id',
        component: MetaContentPageComponent,
        resolve: {
          entity: EntityResolver
        }
      }
    ]
  }

];


@NgModule({
  imports: [
    RouterModule.forChild(demoRouting)
  ],
  exports: [
    RouterModule
  ]
})
export class MetaDemoRoutingModule {
}
