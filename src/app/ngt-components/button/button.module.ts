import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, Yourfeedbtn, confirmbtn, postbtn, contactbtn, nextbtn, deletebtn, selectquestionsbtn, Newclansbtn, CreateChallengebtn } from 'src/app/ngt-components/button/button.component'



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ButtonComponent, Yourfeedbtn, confirmbtn, postbtn, contactbtn, nextbtn, deletebtn, selectquestionsbtn, Newclansbtn, CreateChallengebtn],
  exports: [ButtonComponent, Yourfeedbtn, confirmbtn, postbtn, contactbtn, nextbtn, deletebtn, selectquestionsbtn, Newclansbtn, CreateChallengebtn]
})
export class ButtonModule { }
