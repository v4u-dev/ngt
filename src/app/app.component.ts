import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngt';
  onClick(event){
    console.log(event);
  }

  onOpen(e1){
    console.log(e1)
  }
  onClose(e2){
    console.log(e2)
  }
}

