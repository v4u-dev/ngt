import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngt-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  constructor() { }
  public dropornot=false;
  public newdropornot=false;
  public mahismathidropornot=false;
  public languagesdropornot=false;
  public postsdropornot=false;
  public profiledropornot=false;
  public dropDownarr=['Profile','Name','Address']
  public dropDownarratProfile=['My Profile','Settings','Buddies','Clans','Logout']
public dropDownarratPost=['New Posts','Top Posts','Hot Posts']
  dropdownclick(){
    if(this.dropornot==true)
    {
        this.dropornot=false;
    }
    else if(this.dropornot==false)
    {
          this.dropornot=true;
    }
  }
  New(){
    if(this.newdropornot==true)
    {
        this.newdropornot=false;
    }
    else if(this.newdropornot==false)
    {
          this.newdropornot=true;
    }
  }
  Mahismathi(){
    if(this.mahismathidropornot==true)
    {
        this.mahismathidropornot=false;
    }
    else if(this.mahismathidropornot==false)
    {
          this.mahismathidropornot=true;
    }
  }
  Languages(){
    if(this.languagesdropornot==true)
    {
        this.languagesdropornot=false;
    }
    else if(this.languagesdropornot==false)
    {
          this.languagesdropornot=true;
    }
  }
  Posts(){
    if(this.postsdropornot==true)
    {
        this.postsdropornot=false;
    }
    else if(this.postsdropornot==false)
    {
          this.postsdropornot=true;
    }
  }
  Profile(){
    if(this.profiledropornot==true)
    {
        this.profiledropornot=false;
    }
    else if(this.profiledropornot==false)
    {
          this.profiledropornot=true;
    }
  }
  ngOnInit(): void {
  }

}
