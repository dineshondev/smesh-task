import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FioriRulesModule} from '@ngx-metaui/fiori-rules';
import {ActionBarModule as ABCore, ActionBarModule, ButtonModule} from '@fundamental-ngx/core';
import {MetaUIRulesModule} from '@ngx-metaui/rules';
import {TaskComponent} from './task.component';


@NgModule({
  declarations: [
    TaskComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FioriRulesModule,
    ReactiveFormsModule,
    ActionBarModule,
    ABCore,
    ButtonModule,
    MetaUIRulesModule

  ],
  exports: [
    TaskComponent
  ],
  providers: []
})
export class TaskModule {
}
