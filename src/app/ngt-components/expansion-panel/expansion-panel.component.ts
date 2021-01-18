import { ChangeDetectionStrategy, Component, Directive, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { animate, state, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'ngt-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss'],
  animations : [
    trigger('animationShowHide', [
      state('close', style({ height: '0px', overflow: 'hidden' })),
      state('open', style({ height: '*',overflow: 'hidden'})),
      transition('open <=> close', animate('900ms ease-in-out')),
    ]),
    trigger('animationRotate', [
      state('close', style({ transform: 'rotate(0)' })),
      state('open', style({ transform: 'rotate(-180deg)' })),
      transition('open <=> close', animate('900ms ease-in-out')),
    ]),
  ],
})
export class ExpansionPanelComponent implements OnInit {
  sStatus = 'open';

  onSwitch(){
    console.log('rfffffffffffffffffff')
    this.sStatus = this.sStatus === 'close' ? 'open' : 'close';
  }

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
