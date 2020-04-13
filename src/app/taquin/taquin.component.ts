import { Component, OnInit } from '@angular/core';
import {shuffle} from 'lodash';

@Component({
  selector: 'app-taquin',
  templateUrl: './taquin.component.html',
  styleUrls: ['./taquin.component.css']
})
export class TaquinComponent implements OnInit {

  Position: Array<any> = shuffle([1, 2, 3, 4, 5, 6, 7, 8, ' ']);
  PositionInit: Array<any> =  this.Position.slice();
  Win = false;
  counter = 0;
  constructor() { }

  ngOnInit(): void {
  }
  CanSwap(index1: number, indexNum: number): boolean {
    if (([2, 5, 8].includes(index1)) && (index1 === indexNum + 3 || index1 === indexNum - 3 || index1 === indexNum + 1)) {
      return true;
    } else {
    if (index1 % 3 === 0 && (index1 === indexNum + 3 || index1 === indexNum - 3 || index1 === indexNum - 1)) {
      return true;
    } else {
    if (([1, 4, 7].includes(index1)) && (index1 === indexNum + 3 || index1 === indexNum - 3 || index1 === indexNum + 1
      || index1 === indexNum - 1)) {
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
      if (this.isSameList(this.Position, [1, 2, 3, 4, 5, 6, 7, 8, ' '])) {
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
