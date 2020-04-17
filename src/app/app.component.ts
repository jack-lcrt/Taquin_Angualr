import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gridSize = 9;

  setGridSize(num: number) {
    this.gridSize = num;
  }

}
