import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Tiles = 9;

  changeTilesNum(num: number) {
    this.Tiles = num;
  }

}
