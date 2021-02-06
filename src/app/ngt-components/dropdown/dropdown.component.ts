// import { Directive } from '@angular/core';
import { Component, Input, OnInit, Directive, ElementRef } from '@angular/core';

// import { Component, OnInit } from '@angular/core';
// import { SlideInOutAnimation } from '../../animate';
// @Component({
//   selector: 'ngt-dropdown',
//   templateUrl: './dropdown.component.html',
//   styleUrls: ['./dropdown.component.scss'],
//   animations: [SlideInOutAnimation]
// })
// export class DropdownComponent implements OnInit {

//   constructor() { }
//   ngOnInit(): void {
//     throw new Error('Method not implemented.');
//   }
// }
@Directive({
  selector: '[ngt-select]',
})
export class NgtSelect {
  constructor(el: ElementRef){
    // el.nativeElement.classList.add('p-10');
    // el.nativeElement.classList.add('bg-green');
    // //default stylings applied for a button
    // el.nativeElement.classList.add('py-3');//padding-top and bottom
    // el.nativeElement.classList.add('px-4'); //padding-left and right
    // el.nativeElement.classList.add('bg-gray-100'); //background-color
    // el.nativeElement.classList.add('rounded'); //border-radius
    // el.nativeElement.classList.add('border-gray-200'); //border-color

  }
}