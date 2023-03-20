import { Component, Input, OnInit } from '@angular/core';
import {FruitService} from "../services/fruit.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.scss'],
})
export class FruitListComponent{
  fruitList$: Observable<string[]>;

  constructor(private fruitService: FruitService) {
    this.fruitList$ = fruitService.getFruits();
  }


}
