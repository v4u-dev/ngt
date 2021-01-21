import { Directive } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { SlideInOutAnimation } from '../../animate';
@Component({
  selector: 'ngt-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  animations: [SlideInOutAnimation]
})
export class DropdownComponent implements OnInit {

  constructor() { }
  public dropDownarr=['Profile','Name','Address']
  public dropDownarratProfile=['My Profile','Settings','Buddies','Clans','Logout']
public dropDownarratPost=['New Posts','Top Posts','Hot Posts']
animationState = 'out';
animationfornewdropdown = 'out'
animationformahishmathidropdown = 'out'
animationforlanguagedropdown = 'out'
animationforpostdropdown = 'out'
animationforprofiledropdown='out'
toggleShowDiv(divName: string) {
  if (divName == 'Python Programming') {
    this.animationState = this.animationState === 'out' ? 'in' : 'out';
  }
  if (divName == 'New') {
    this.animationfornewdropdown = this.animationfornewdropdown === 'out' ? 'in' : 'out';
  }
  if (divName == 'Mahishmati') {
    this.animationformahishmathidropdown = this.animationformahishmathidropdown === 'out' ? 'in' : 'out';
  } 
  if (divName == 'Language') {
    this.animationforlanguagedropdown = this.animationforlanguagedropdown === 'out' ? 'in' : 'out';
  } 
  if (divName == 'Post') {
    this.animationforpostdropdown = this.animationforpostdropdown=== 'out' ? 'in' : 'out';
  } 
  if (divName == 'Profile') {
    this.animationforprofiledropdown = this.animationforprofiledropdown=== 'out' ? 'in' : 'out';
  } 
  }
  ngOnInit(): void {
  }

}


@Directive({
  selector: 'ngt-dropdown-programmig',
})
export class ngtdropdownprogrammig {}

@Directive({
  selector: 'ngt-dropdown-New',
})
export class ngtdropdownNew {}

@Directive({
  selector: 'ngt-dropdown-clans',
})
export class ngtdropdownclans {}

@Directive({
  selector: 'ngt-dropdown-languages',
})
export class ngtdropdownlanguages {}

@Directive({
  selector: 'ngt-dropdown-posts',
})
export class ngtdropdownposts {}

@Directive({
  selector: 'ngt-dropdown-profile',
})
export class ngtdropdownprofile {}
