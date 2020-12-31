import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent, td, th } from './table.component';



@NgModule({
  declarations: [TableComponent,th,td],
  imports: [
    CommonModule
  ],
  exports:[
    TableComponent,
    th,
    td
  ]
})
export class TableModule { }
