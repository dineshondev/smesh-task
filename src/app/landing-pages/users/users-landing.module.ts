import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonGroupModule, IconModule, IdentifierModule, InputGroupModule, PanelModule, TableModule} from '@fundamental-ngx/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {UsersLandingComponent} from './users-landing.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    UsersLandingComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    PanelModule,
    ButtonGroupModule,
    IdentifierModule,
    TableModule,
    IconModule,
    InputGroupModule

  ],
  exports: [
    UsersLandingComponent
  ],
  providers: []
})
export class UsersLandingModule {

}
