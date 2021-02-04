import { Component, Input, OnInit, Directive, ElementRef } from '@angular/core';

// @Component({
//   selector: '[ngt-button]',
//   templateUrl: './button.component.html',
//   styleUrls: ['./button.component.scss']
// })
// export class ButtonComponent implements OnInit {


//   constructor() {

//   }

//   ngOnInit(): void {
//   }

// }

@Directive({
  selector: '[ngt-button]',
})
export class NgtButton {
  constructor(el: ElementRef){
    //default stylings applied for a button
    el.nativeElement.classList.add('py-3');//padding-top and bottom
    el.nativeElement.classList.add('px-4'); //padding-left and right
    el.nativeElement.classList.add('bg-gray-100'); //background-color
    el.nativeElement.classList.add('rounded'); //border-radius
    el.nativeElement.classList.add('border-gray-200'); //border-color

  }
}
