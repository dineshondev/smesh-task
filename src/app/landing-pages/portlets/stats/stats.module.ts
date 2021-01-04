import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StatsComponent} from './stats.component';


@NgModule({
  declarations: [
    StatsComponent
  ],
  imports: [
    CommonModule
  ],
  entryComponents: [
    StatsComponent
  ],
  exports: [
    StatsComponent
  ],
  providers: []
})
export class StatsModule {

}
