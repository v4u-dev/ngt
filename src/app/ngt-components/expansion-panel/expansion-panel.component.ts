import { ChangeDetectionStrategy, Component, Directive, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'c2c-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss']
})
export class ExpansionPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  isHidden = false
}

@Directive({
  selector: 'expansion-panel-title',
})
export class ExpansionPanelTitle {}

@Directive({
  selector: 'expansion-panel-body',
})
export class ExpansionPanelBody {}

@Directive({
  selector: 'expansion-panel-footer',
})
export class ExpansionPanelFooter {}
