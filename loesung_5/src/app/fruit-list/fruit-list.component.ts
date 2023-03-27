import {FruitService} from "../services/fruit.service";
import {Observable} from "rxjs";
import { Component } from "@angular/core";

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
