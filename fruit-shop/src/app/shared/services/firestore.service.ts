import { inject, Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  Firestore,
  FirestoreDataConverter,
} from '@angular/fire/firestore';
import { defer, map, Observable } from 'rxjs';
import { Fruit } from '../models/fruit.model';

const fruitConverter: FirestoreDataConverter<Fruit> = {
  toFirestore: (fruit) => ({ name: fruit.name }),
  fromFirestore: (snapshot) => ({ name: snapshot.get('name') }),
};

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  private readonly firestore: Firestore = inject(Firestore);
  private readonly fruitCollection = collection(
    this.firestore,
    'fruits',
  ).withConverter(fruitConverter);

  public readonly fruits$: Observable<Fruit[]> = collectionData<Fruit>(
    this.fruitCollection,
  ).pipe(
    map((fruits) =>
      [...fruits].sort((first, second) =>
        first.name.localeCompare(second.name),
      ),
    ),
  );

  public addFruit(name: string): void {
    const fruit: Fruit = { name };

    defer(() => addDoc(this.fruitCollection, fruit)).subscribe(
      (documentReference) => {
        console.log(`Added fruit called ${name} to ${documentReference.path}`);
      },
    );
  }
}
