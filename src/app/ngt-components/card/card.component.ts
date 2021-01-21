import { ChangeDetectionStrategy, Component, Directive, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'c2c-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
}


@Directive({
  selector: 'c2c-card-title',
})
export class C2cCardTitle { }

@Directive({
  selector: 'c2c-card-content',
})
export class C2cCardContent { }

