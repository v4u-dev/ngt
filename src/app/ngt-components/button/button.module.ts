import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgtButton, confirmbtn, postbtn, contactbtn, nextbtn, deletebtn, selectquestionsbtn, Newclansbtn, CreateChallengebtn } from 'src/app/ngt-components/button/button.component'



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgtButton, confirmbtn, postbtn, contactbtn, nextbtn, deletebtn, selectquestionsbtn, Newclansbtn, CreateChallengebtn],
  exports: [NgtButton,  confirmbtn, postbtn, contactbtn, nextbtn, deletebtn, selectquestionsbtn, Newclansbtn, CreateChallengebtn]
})
export class ButtonModule { }
