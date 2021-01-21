import { Component } from '@angular/core';
import {ButtonComponent} from '../app/ngt-components/button/button.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'ngt';
  buttonClicked(){
    console.log("button is clicked")
  }
  // checkboxCLicked(){
  //   console.log("checkbox clicked");
  // console.log(this.hello);

  // }

  hello: any;
  
}
