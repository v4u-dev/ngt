import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngt-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  // @Input() color: String;
  @Input() color: { 'colorname': string, 'height':number };

  constructor() {
    console.log(this.color);
   }

  ngOnInit(): void {
  }

}
