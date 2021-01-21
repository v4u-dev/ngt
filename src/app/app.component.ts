import { Component } from '@angular/core';
import { SlideInOutAnimation } from '../../src/app/animate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [SlideInOutAnimation]
})
export class AppComponent {
  title = 'ngt';
  public dropDownarrProgram=['Python Programming','Java Programming','C++ Programming']
  public dropDownforNew=['New','Old','Late']
  public dropDownforClans=['Mahismathi','Bahubali','C2c']
  public dropDownforLanguages=['C','C++','Java','Python']
  public dropDownarratProfile=['My Profile','Settings','Buddies','Clans','Logout']
public dropDownarratPost=['New Posts','Top Posts','Hot Posts']
  animationState = 'out';
  animationfornewdropdown = 'out'
animationformahishmathidropdown = 'out'
animationforlanguagedropdown = 'out'
animationforpostdropdown = 'out'
animationforprofiledropdown='out'
// disabled: true;
public singleelementofdropdownarrprogram=this.dropDownarrProgram[0];
public singleelementofdropDownforNew=this.dropDownforNew[0];
public singleelementofdropDownforClans=this.dropDownforClans[0];
public singleelementofdropDownforLanguages=this.dropDownforLanguages[0];
public singleelementofdropDownforProfile=this.dropDownarratProfile[0];
public singleelementofdropDownforPost=this.dropDownarratPost[0];

changeoption(values)
{
  console.log(values);
  this.singleelementofdropdownarrprogram=values;
}
changeoptionNew(values)
{
  console.log(values);
  this.singleelementofdropDownforNew=values;
}
changeoptionforClans(values)
{
  console.log(values);
  this.singleelementofdropDownforClans=values;
}
changeoptionforPrograms(values)
{
  console.log(values);
  this.singleelementofdropDownforLanguages=values;
}
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
}
