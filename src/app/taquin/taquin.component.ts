import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { shuffle, isEqual } from 'lodash';

@Component({
  selector: 'app-taquin',
  templateUrl: './taquin.component.html',
  styleUrls: ['../app.component.css'],
})
export class TaquinComponent implements OnInit, OnChanges {
  @Input() gridSize: number;
  TilesOrder: Array<number>;
  SizeStr: string;
  hasWon = false;
  counter = 0;
  constructor() { }

  ngOnInit(): void {
    this.SizeStr = this.gridSize.toString();
    this.TilesOrder = shuffle([...Array(this.gridSize).keys()]);
  }

  ngOnChanges(): void {
    this.SizeStr = this.gridSize.toString();
    this.TilesOrder = shuffle([...Array(this.gridSize).keys()]);
  }

  sourceContent(content: number): string {
    const src: string = 'assets/' + this.SizeStr + '/';
    if (content !== 0) {
      return src + String(content) + '.jpg';
    } else {
      return src + 'final.jpg';
    }
  }

  canSwap(index0: number, indexNum: number): boolean {
    const UpDown: boolean =
      indexNum === index0 + Math.sqrt(this.gridSize) ||
      indexNum === index0 - Math.sqrt(this.gridSize);
    const Left: boolean =
      indexNum === index0 + 1 && indexNum % Math.sqrt(this.gridSize) !== 0;
    const Right: boolean =
      indexNum === index0 - 1 &&
      indexNum % Math.sqrt(this.gridSize) !==
      Math.sqrt(this.gridSize) - 1;
    return UpDown || Left || Right;
  }

  Swap(num: any) {
    const indexNum: number = this.TilesOrder.indexOf(num);
    const index0: number = this.TilesOrder.indexOf(0);
    if (this.canSwap(index0, indexNum)) {
      this.TilesOrder[index0] = num;
      this.TilesOrder[indexNum] = 0;
      this.counter++;
      if (isEqual(this.TilesOrder, [...Array(this.gridSize).keys()])) {
        this.hasWon = true;
      }
    }
  }

  Restart() {
    this.TilesOrder = shuffle([...Array(this.gridSize).keys()]);
    this.counter = 0;
    this.hasWon = false;
  }
}
