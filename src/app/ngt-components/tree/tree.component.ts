import { Component, OnInit, Directive, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ngt-tree',
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
  selector: 'ngt-tree-node',
})
export class NgtTreeNode {}

// @Directive({
//   selector: 'c2c-nested-tree-node',
// })
// export class C2cNestedTreeNode {}


@Component({
  selector: 'ngt-nested-tree-node',
  templateUrl: 'nested.tree.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NgtNestedTreeNode {
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