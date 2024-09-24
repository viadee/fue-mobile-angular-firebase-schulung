import { LowerCasePipe } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fruit',
  standalone: true,
  imports: [FormsModule, LowerCasePipe],
  templateUrl: './fruit.component.html',
  styleUrl: './fruit.component.scss'
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
