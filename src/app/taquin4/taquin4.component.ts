import { Component, OnInit } from '@angular/core';
import * as  _ from 'lodash';

@Component({
  selector: 'app-taquin4',
  templateUrl: './taquin4.component.html',
  styleUrls: ['./taquin4.component.css']
})
export class Taquin4Component implements OnInit {

  Position: Array<any> = _.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ' ']);
  PositionInit: Array<any> =  this.Position.slice();
  Win = false;
  counter = 0;
  constructor() { }

  ngOnInit(): void {
  }
  CanSwap(index1: number, indexNum: number): boolean {
    if ([3, 7, 11, 15].includes(index1)) {
      if(index1 === indexNum + 4 || index1 === indexNum - 4 || index1 === indexNum + 1) {
        return true;
      }
    } else {
    if (index1 % 4 === 0) {
      if (index1 === indexNum + 4 || index1 === indexNum - 4 || index1 === indexNum - 1) {
        return true;
      }
    } else {
    if (index1 === indexNum + 4 || index1 === indexNum - 4 || index1 === indexNum + 1
      || index1 === indexNum - 1) {
      return true;
    }
    return false;
  }}}

  isNumber(val: any) {
    return( typeof val === 'number');
  }

  isSameList(list1: Array<any>, list2: Array<any>): boolean {
    // renvois True si list1 et list2 sont identiques
    if (list1.length !== list2.length) {
      return  false;
    }
    for (let i = 0, c = list1.length; i < c; i++) {
      if (list1[i] !== list2[i]) {
        return(false);
      }
    }
    return true;
  }

  Swap(num: any) {
    const indexNum: number = this.Position.indexOf(num);
    const index1: number = this.Position.indexOf(' ');
    if (this.CanSwap(index1, indexNum)) {
      this.Position[index1] = num;
      this.Position[indexNum] = ' ';
      this.counter += 1;
      if (this.isSameList(this.Position, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ' '])) {
        this.Win = true;
      }
    }
  }

  Restart() {
    this.Position = this.PositionInit.slice();
    this.counter = 0;
    this.Win =  false;
  }


}
