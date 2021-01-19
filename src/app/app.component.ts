import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngt';
  public headings = ['No','Name','Cocos','Rank']
  public tabdat = [
    {
      'No':'1',
      'Name':'A',
      'Cocos':'100',
      'Rank':'1'
    },
    {
      'No':'2',
      'Name':'B',
      'Cocos':'50',
      'Rank':'2'
    },
    {
      'No':'3',
      'Name':'C',
      'Cocos':'0',
      'Rank':'3'
    }
  ]
}
