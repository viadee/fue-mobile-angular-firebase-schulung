import {inject, Injectable} from '@angular/core';
import {addDoc, collection, collectionData, Firestore} from '@angular/fire/firestore';
import {EMPTY, map, Observable} from 'rxjs';
import {Fruit} from './fruit.model';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private firestore: Firestore = inject(Firestore);
  private fruitCollection = collection(this.firestore, 'fruits');
  public fruits$: Observable<Fruit[]> = EMPTY;

  constructor() {
    this.getFruits();
  }

  private getFruits() {
    this.fruits$ = (collectionData(this.fruitCollection) as Observable<Fruit[]>).pipe(
      map(fruits => fruits.sort((a: Fruit, b: Fruit) => a.name.localeCompare(b.name)))
    );
  }

  public addFruit(name: string) {
    addDoc(this.fruitCollection, <Fruit> {name: name}).then((docRef) => {
      console.log(`Added fruit called ${name} to ${docRef.path}`);
    });
  }
}
