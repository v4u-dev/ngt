import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngt';
  public tableHeadings=['head1','head2','head3'];
  public tablecontent=['con1','co2','con3'];
}
