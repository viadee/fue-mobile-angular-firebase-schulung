import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { LowerCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-fruit',
    templateUrl: './fruit.component.html',
    styleUrls: ['./fruit.component.scss'],
    standalone: true,
    imports: [FormsModule, LowerCasePipe],
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
