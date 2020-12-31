import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C2cDialogboxTitle,C2cDialogboxContent, DialogboxComponent ,C2cDialogboxActions} from './dialogbox.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DialogboxComponent, C2cDialogboxTitle, C2cDialogboxContent,C2cDialogboxActions],
  exports: [DialogboxComponent, C2cDialogboxTitle, C2cDialogboxContent,C2cDialogboxActions]
})
export class DialogboxModule { }
