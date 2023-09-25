import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  fruitBasket: string[] = [];
  fruit$= new BehaviorSubject<string[]>([]);

  constructor() { }

  addFruit(fruit: string){
    this.fruitBasket.push(fruit)
    this.fruit$.next(this.fruitBasket);
  }

  getFruits(): Observable<string[]>{
    return this.fruit$;
  }

}
