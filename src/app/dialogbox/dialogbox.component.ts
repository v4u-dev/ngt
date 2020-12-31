import { Component, OnInit,Directive } from '@angular/core';

@Component({
  selector: 'c2c-dialog-box',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.scss']
})
export class DialogboxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@Directive({
  selector: 'c2c-dialogbox-title',
})
export class C2cDialogboxTitle {}

@Directive({
  selector: 'c2c-dialogbox-content',
})
export class C2cDialogboxContent {}

@Directive({
  selector: 'c2c-dialogbox-actions',
})
export class C2cDialogboxActions {}
