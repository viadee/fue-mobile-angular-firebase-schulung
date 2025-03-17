import { LowerCasePipe } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-fruit',
  imports: [FormsModule, LowerCasePipe, FormsModule, LowerCasePipe, MatButton, MatFormField, MatInput, MatLabel],
  templateUrl: './fruit.component.html',
  standalone: true,
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
