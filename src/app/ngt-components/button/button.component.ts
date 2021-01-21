import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngt-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  // @Input() buttonBehaviour:{'color':string,'background':string,'height':any,'width':any}
@Input() color:string;
  constructor() { }

  ngOnInit(): void {
  }

}
