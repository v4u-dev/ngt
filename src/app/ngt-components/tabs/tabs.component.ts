import { Component, OnInit } from '@angular/core';
import { animationFrameScheduler } from 'rxjs';
import { fade, slideUp } from '../../animations/slidemoveanimation';
import {TabComponent} from '../tab/tab.component';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  animations: [
    fade,
    slideUp
  ]

})

export class TabsComponent implements OnInit {

    tabs: TabComponent[] = [];
    
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
