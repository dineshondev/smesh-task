import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {MetaConfig, MetaUIRulesModule} from '@ngx-metaui/rules';
import {FioriRulesModule} from '@ngx-metaui/fiori-rules';
import * as userRules from './user-rules';
import localeStr from '@angular/common/locales/es-US';
import {MetaDemoModule} from './domain/app-demo/meta-demo.module';


const LOCALE = 'us';

registerLocaleData(localeStr, LOCALE);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MetaDemoModule,
    MetaUIRulesModule.forRoot(),
    FioriRulesModule.forRoot(),
    AppRoutingModule

  ],
  exports: [],
  providers: [
    {provide: LOCALE_ID, useValue: LOCALE}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private config: MetaConfig) {

    const rules: any[] = config.get('metaui.rules.user-rules') || [];
    rules.push(userRules);
    config.set('metaui.rules.user-rules', rules);
  }
}
