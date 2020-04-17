import { Component, OnInit, OnChanges, Input } from '@angular/core';
import {shuffle} from 'lodash';

@Component({
  selector: 'app-taquin',
  templateUrl: './taquin.component.html',
  styleUrls: ['./taquin.component.css']
})



export class TaquinComponent implements OnInit, OnChanges {

  @Input() TilesNumber: number;
  Order: Array<number> = [];
  Tilesstr = '';
  Win = false;
  counter = 0;
  constructor() {}

  ngOnInit(): void {
    this.Tilesstr = this.TilesNumber.toString();
    this.Order = shuffle([...Array(this.TilesNumber).keys()]);
  }

  ngOnChanges(): void {
    this.Tilesstr = this.TilesNumber.toString();
    this.Order = shuffle([...Array(this.TilesNumber).keys()]);
  }

  sourceContent(content: number): string {
    const src: string = 'assets/' + this.Tilesstr + '/';
    if (content !== 0) {
      return src + String(content) + '.jpg';
    } else {
      return src + 'final.jpg';
    }
  }

  CanSwap(index0: number, indexNum: number): boolean {
    const UpDown: boolean = indexNum === index0 + Math.sqrt(this.TilesNumber) || indexNum === index0 - Math.sqrt(this.TilesNumber);
    const Left: boolean = indexNum === index0 + 1 && indexNum % Math.sqrt(this.TilesNumber) !== 0;
    const Right: boolean = indexNum === index0 - 1 && indexNum % Math.sqrt(this.TilesNumber) !== Math.sqrt(this.TilesNumber) - 1;
    return UpDown || Left || Right;
  }
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
    const indexNum: number = this.Order.indexOf(num);
    const index0: number = this.Order.indexOf(0);
    if (this.CanSwap(index0, indexNum)) {
      this.Order[index0] = num;
      this.Order[indexNum] = 0;
      this.counter ++;
      if (this.isSameList(this.Order, [...Array(this.TilesNumber).keys()])) {
        this.Win = true;
      }
    }
  }

  Restart() {
    this.Order = shuffle([...Array(this.TilesNumber).keys()]);
    this.counter = 0;
    this.Win =  false;
  }
}
