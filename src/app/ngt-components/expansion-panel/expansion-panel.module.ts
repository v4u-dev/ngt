import { NgModule, Directive } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpansionPanelTitle, ExpansionPanelBody, ExpansionPanelFooter,ExpansionPanelComponent } from './expansion-panel.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [ ExpansionPanelTitle, ExpansionPanelBody, ExpansionPanelFooter,ExpansionPanelComponent],
  exports: [ ExpansionPanelTitle, ExpansionPanelBody, ExpansionPanelFooter,ExpansionPanelComponent]
})
export class ExpansionPanelModule { }
 