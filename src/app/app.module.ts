import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C2cCardModule } from './ngt-components/card/card.module';
import { TabsComponent } from './ngt-components/tabs/tabs.component';
import { TabComponent } from './ngt-components/tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    TabComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    C2cCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
