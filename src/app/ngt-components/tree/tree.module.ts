import { NgModule, Directive } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgtTreeNode,TreeComponent, NgtNestedTreeNode } from './tree.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [TreeComponent, NgtTreeNode, NgtNestedTreeNode],
  exports: [TreeComponent, NgtTreeNode, NgtNestedTreeNode]
})
export class NgtTreeModule { }