import { Injectable } from "@angular/core";
import { doc, docSnapshots, Firestore } from "@angular/fire/firestore";
import {BehaviorSubject, catchError, EMPTY, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  fruitBasket: string[] = [];
  fruit$: Observable<string[]>;

  constructor(private firestore: Firestore) { 
    this.fruit$ = docSnapshots(doc(this.firestore, 'Fruchtanwendung/Fruchtliste')).pipe(
      map((doc) => {
        const data = doc.data() as { Fruechte: string[];};
        console.log(data);
        return data;
      }),
      map((data) => {
        return data.Fruechte
      }),
      catchError((err) => {
        console.log(err);
        return EMPTY;
      }
    ),
    )
  }

  addFruit(fruit: string){
    //this.fruitBasket.push(fruit)
    //this.fruit$.next(this.fruitBasket);
  }

  getFruits(): Observable<string[]>{
    return this.fruit$;
  }

}
