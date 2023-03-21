import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import {FruitService} from "../services/fruit.service";

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.scss'],
})
export class FruitComponent implements OnInit {

  public fruit = '';

  constructor(private fruitService: FruitService) {}

  ngOnInit(): void {}

  public reset(): void {
    this.fruit = '';
  }

  public add(): void {
    if (this.fruit.length > 0) {
      this.fruitService.addFruit(this.fruit);
      this.fruit = '';
    }
  }
}
