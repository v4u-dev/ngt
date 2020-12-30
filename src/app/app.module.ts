import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C2cCardModule } from './ngt-components/card/card.module';
import { ButtonModule } from './ngt-components/button/button.module';
import {CheckboxModule} from './ngt-components/checkbox/checkbox.module';
import { InputModule } from './ngt-components/input/input.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    C2cCardModule,
    ButtonModule,
    CheckboxModule,
    InputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
