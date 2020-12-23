import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C2cCardModule } from './ngt-components/card/card.module';
import { ExpansionPanelModule } from './ngt-components/expansion-panel/expansion-panel.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    C2cCardModule,
    ExpansionPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
