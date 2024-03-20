import { Component, OnInit } from '@angular/core';
import {FruitService} from "../fruit.service";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-fruit',
    templateUrl: './fruit.component.html',
    styleUrls: ['./fruit.component.scss'],
    standalone: true,
    imports: [FormsModule],
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
