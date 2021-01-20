import { NgModule, Directive } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C2cCardTitle, CardComponent, C2cCardContent } from './card.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [CardComponent, C2cCardTitle, C2cCardContent],
  exports: [CardComponent, C2cCardTitle, C2cCardContent]
})
export class C2cCardModule { }