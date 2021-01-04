import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonGroupModule, IconModule, IdentifierModule, InputGroupModule, PanelModule, TableModule} from '@fundamental-ngx/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AssetsLandingComponent} from './assets-landing.component';

@NgModule({
  declarations: [
    AssetsLandingComponent
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
    AssetsLandingComponent
  ],
  providers: []
})
export class AssetsLandingModule {

}
