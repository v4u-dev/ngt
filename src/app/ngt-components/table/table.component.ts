import { Component, Directive, OnInit } from '@angular/core';

@Component({
  selector: 'ngt-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }}

  @Directive({
    selector: 'th',
  })
  export class th{}
  
  @Directive({
    selector: 'td',
  })
  export class td {}

  // @Directive({
  //   selector: 'tr',
  // })
  // export class tr {}
  

