import { Component, OnInit, Directive, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'c2c-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  constructor() {
  }
 
  ngOnInit(): void {
  }

}

@Directive({
  selector: 'c2c-tree-node',
})
export class C2cTreeNode {}

// @Directive({
//   selector: 'c2c-nested-tree-node',
// })
// export class C2cNestedTreeNode {}


@Component({
  selector: 'c2c-nested-tree-node',
  templateUrl: 'nested.tree.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class C2cNestedTreeNode {
  isExpanded: Boolean = false;
  // RightArrow: String = "../../../assets/right-arrow-angle.svg";
  // DownArrow: String = "../../../assets/down-arrow.svg";
  // imgSrc : String = this.RightArrow;
  // toggleArrow() {
  //   console.log('Toggled!')
  //   this.isExpanded = ! this.isExpanded;
  //   if(this.isExpanded===true) this.imgSrc = this.DownArrow;
  //   else this.imgSrc = this.RightArrow;
  // }
}