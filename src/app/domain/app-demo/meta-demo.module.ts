import {NgModule} from '@angular/core';
import {ShellbarModule} from '@fundamental-ngx/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {ArrayDataProvider, DATA_PROVIDERS, DataProvider, MetaApplicationModule} from '@ngx-metaui/fiori-rules';
import {HomeComponent} from './home.component';
import {MetaDemoRoutingModule} from './meta-demo-routing.module';
import {User} from '../model/user';
import {UserCSV, userDB} from '../rest/user';
import {ProjectCSV, projectDB} from '../rest/project';
import {Project} from '../model/project';
import {TaskModule} from '../task/task.module';
import {NewsModule} from '../../landing-pages/portlets/news/news.module';
import {MyDocumentsModule} from '../../landing-pages/portlets/my-documents/my-documents.module';
import {LandingModule} from '../../landing-pages/landing.module';
import {StatsModule} from '../../landing-pages/portlets/stats/stats.module';

const defaultSV = new User('admin', 'Frantisek Kolar', 'Project', 'fk@gmail.com',
  '', null, '');

const dataServiceFactory = () => {
  const providers = new Map<string, DataProvider<any>>();

  providers.set('User', new ArrayDataProvider<User>(
    userDB.map((i: UserCSV) => {
      return new User(
        i.UniqueName, i.Name, i.Organization, i.EmailAddress, '', defaultSV, '');
    })));


  providers.set('Project', new ArrayDataProvider<Project>(
    projectDB.map((i: ProjectCSV) => {
      const user = i.Name.split(' ');

      return new Project(
        i.UniqueName, i.Name, i.Prefix, i.Description);
    })));

  return providers;
};


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ShellbarModule,
    MetaDemoRoutingModule,
    TaskModule,
    MetaApplicationModule,
    NewsModule,
    MyDocumentsModule,
    StatsModule,
    LandingModule
  ],
  providers: [
    {provide: DATA_PROVIDERS, useFactory: dataServiceFactory}
  ]
})
export class MetaDemoModule {
}



