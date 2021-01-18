import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import "@angular/compiler";



@NgModule({
  declarations: [
    DropdownComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DropdownComponent
  ]
})
export class DropdownModule { }

