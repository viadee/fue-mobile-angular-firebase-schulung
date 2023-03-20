import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.scss'],
})
export class FruitComponent implements OnInit {
  public fruit = '';

  constructor() {}

  ngOnInit(): void {}

  public resetFruit(): void {
    this.fruit = '';
  }
}
