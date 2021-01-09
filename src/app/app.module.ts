import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C2cCardModule } from './ngt-components/card/card.module';
// import { DialogboxComponent } from './dialogbox/dialogbox.component';
import {DialogboxModule} from 'src/app/ngt-components/dialogbox/dialogbox.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    C2cCardModule,
    DialogboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
