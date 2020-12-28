import { NgModule, Directive } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C2cTreeNode,TreeComponent, C2cNestedTreeNode } from './tree.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [TreeComponent, C2cTreeNode, C2cNestedTreeNode],
  exports: [TreeComponent, C2cTreeNode, C2cNestedTreeNode]
})
export class C2cTreeModule { }