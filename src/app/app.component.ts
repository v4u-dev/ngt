import { Component } from '@angular/core';
// import { ButtonComponent } from '../app/ngt-components/button/button.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ngt';

  YourfeedBtnColor = '#0080F3';
  YourfeedBtnHeight = '52px';
  YourfeedBtnWidth = '147px';

  confirmBtnColor = '#0080F3';
  confirmBtnHeight = '38px';
  confirmBtnWidth = '145px';

  postBtnColor = '#0080F3';
  postBtnHeight = '34px';
  postBtnWidth = '80px';

  contactBtnColor = '#0080F3';
  contactBtnHeight = '42px';
  contactBtnWidth = '133px';

  nextBtnColor = '#0080F3';
  nextBtnHeight = '42px';
  nextBtnWidth = '69px';

  deleteBtntextcolor = "#949494";
  deleteBtnColor = '#EFEFEF';
  deleteBtnHeight = '33px';
  deleteBtnWidth = '143px';

  selectquestionsBtntextcolor = "#949494";
  selectquestionsBtnColor = '#EFEFEF';
  selectquestionsBtnHeight = '42px';
  selectquestionsBtnWidth = '149px';

  NewclansBtntextcolor = "#949494";
  NewclansBtnColor = '#EFEFEF';
  NewclansBtnHeight = '52px';
  NewclansBtnWidth = '147px';

  CreateChallengeBtntextcolor = "#949494";
  CreateChallengeBtnColor = '#2DCE89';
  CreateChallengeBtnHeight = '79px';
  CreateChallengeBtnWidth = '322px';

  checkboxCLicked() {
    console.log("checkbox clicked");
    console.log(this.hello);

  }

  hello: any;

}
