import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgtInput}  from 'src/app/ngt-components/input/input.component'



@NgModule({
  declarations: [NgtInput],
  imports: [
    CommonModule
  ],
  exports:[
    NgtInput
  ]
})
export class InputModule { }