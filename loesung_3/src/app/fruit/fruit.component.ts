import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.scss'],
})
export class FruitComponent implements OnInit {
  @Output()
  public addFruit: EventEmitter<string> = new EventEmitter<string>();

  public fruit = '';

  constructor() {}

  ngOnInit(): void {}

  public reset(): void {
    this.fruit = '';
  }

  public add(): void {
    if (this.fruit.length > 0) {
      this.addFruit.emit(this.fruit);
      this.fruit = '';
    }
  }
}
