import { Component, Input, OnInit, Directive } from '@angular/core';

@Component({
  selector: 'ngt-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {


  constructor() {

  }

  ngOnInit(): void {
  }

}

@Directive({
  selector: 'Yourfeed-btn',
})
export class Yourfeedbtn {

}

@Directive({
  selector: 'confirm-btn',
})
export class confirmbtn {

}

@Directive({
  selector: 'post-btn',
})
export class postbtn {

}

@Directive({
  selector: 'contact-btn',
})
export class contactbtn {

}

@Directive({
  selector: 'next-btn',
})
export class nextbtn {

}

@Directive({
  selector: 'delete-btn',
})
export class deletebtn {

}

@Directive({
  selector: 'selectquestions-btn',
})
export class selectquestionsbtn {

}

@Directive({
  selector: 'Newclans-btn',
})
export class Newclansbtn {

}

@Directive({
  selector: 'CreateChallenge-btn',
})
export class CreateChallengebtn {

}
