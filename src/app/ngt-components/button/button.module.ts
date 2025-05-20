import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgtButton } from 'src/app/ngt-components/button/button.component'



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgtButton ],
  exports: [NgtButton ]
})
export class ButtonModule { }
