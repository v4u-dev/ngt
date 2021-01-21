import { Component, OnInit ,Input} from '@angular/core';
import {TabComponent} from '../tab/tab.component';

@Component({
  selector: 'ngt-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],


})

export class TabsComponent implements OnInit {

    tabs: TabComponent[] = [];

    @Input() bgColor: string;
    @Input() color: string;
    @Input() fontsize: string;
    @Input() fontweight:string;
    



  selectTab(tab: TabComponent) {
    this.tabs.forEach((tab) => {
      tab.active = false;
    });
    tab.active = true;
  }
  addTab(tab: TabComponent) {
    if (this.tabs.length === 0) {
      tab.active = true;
    }
    this.tabs.push(tab);
  }
  
  constructor() { }

  ngOnInit(): void {
  }
  
}
