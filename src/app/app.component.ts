import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngt';
  public message = "bala";
  buttonEvent(event) {
    console.log(event);
  }

public popup=false;
openPopup(){
  this.popup=true;
}
closePopup(){
  this.popup=false;
}
}
