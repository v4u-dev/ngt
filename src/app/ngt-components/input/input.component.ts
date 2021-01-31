import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'ngt-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  constructor() { }

  @Input() bgColor: string;
  @Input() fontcolor: string;
  @Input() fontsize: string;
  @Input() fontweight:string;
  @Input() c2cplaceholder:string;
  @Input() Inputtype:Boolean;
  @Input() emojino:Number;
  @Input() c2ctype:string;
  @Input() c2cname:string;

  // emojis
  emoji=["😀","😁","😂","🤣","😃","😄","😅","😆","😉","😊","😋","😎"]

  
  ngOnInit(): void {
  }

}
