import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C2cCardModule } from './ngt-components/card/card.module';
import { C2cTreeModule } from './ngt-components/tree/tree.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    C2cCardModule,
    C2cTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
