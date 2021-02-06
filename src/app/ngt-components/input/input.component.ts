import { Component, OnInit ,Input ,Directive, ElementRef } from '@angular/core';

// @Component({
//   selector: 'ngt-input',
//   templateUrl: './input.component.html',
//   styleUrls: ['./input.component.scss']
// })
// export class InputComponent implements OnInit {

//   constructor() { }

//   @Input() bgColor: string;
//   @Input() fontcolor: string;
//   @Input() fontsize: string;
//   @Input() fontweight:string;
//   @Input() c2cplaceholder:string;
//   @Input() Inputtype:Boolean;
//   @Input() emojino:Number;
//   @Input() c2ctype:string;
//   @Input() c2cname:string;

//   // emojis
//   emoji=["😀","😁","😂","🤣","😃","😄","😅","😆","😉","😊","😋","😎"]

  
//   ngOnInit(): void {
//   }
  @Directive({
    selector: '[ngt-input]',
  })
  export class NgtInput {
    constructor(el: ElementRef){
      //default stylings applied for a input
      el.nativeElement.classList.add('py-4');//padding-top and bottom
      el.nativeElement.classList.add('px-5'); //padding-left and right
      el.nativeElement.classList.add('#EFEFEF'); //background-color
      el.nativeElement.classList.add('rounded'); //border-radius
      el.nativeElement.classList.add('white'); //border-color
  
    }
  }

// }

