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
    el.nativeElement.classList.add('p-10');
    el.nativeElement.classList.add('bg-blue');
  }
}
