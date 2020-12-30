import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngt';
  public dropDownarr=['ele1','ele2','ele3']
  dropdownclick(element){
    console.log("drop down clicked element\n",element);

  }
}
