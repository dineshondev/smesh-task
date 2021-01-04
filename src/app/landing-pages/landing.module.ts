import {NgModule} from '@angular/core';
import {ProjectsLandingModule} from './projects/projects-landing.module';
import {AssetsLandingModule} from './assets/assets-landing.module';
import {UsersLandingModule} from './users/users-landing.module';

@NgModule({
  declarations: [],
  imports: [
    ProjectsLandingModule,
    UsersLandingModule,
    AssetsLandingModule

  ],
  exports: [
    ProjectsLandingModule,
    UsersLandingModule,
    AssetsLandingModule
  ],
  providers: []
})
export class LandingModule {

}
