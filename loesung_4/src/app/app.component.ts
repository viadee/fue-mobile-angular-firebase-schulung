import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FruitComponent } from './fruit/fruit.component';
import { FruitListComponent } from './fruit-list/fruit-list.component';
import { collection, collectionData, doc, Firestore, setDoc } from '@angular/fire/firestore';
import { catchError, map, Observable, of, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [FormsModule, FruitComponent, FruitListComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public basket: string[] = [];

  private firestore = inject(Firestore);
  private fruchtanwendungCollection = collection(this.firestore, 'Fruchtanwendung');
  private fruchtliste = doc(this.fruchtanwendungCollection, 'Fruchtliste');
  constructor() {
    collectionData(this.fruchtanwendungCollection).pipe(
        map((d) => d[0] as { Fruechte: string[]; }),
        map(d => d.Fruechte),
        tap((d) => console.log(d)),
        catchError((err) => {
          console.log(err);
          return of([]);
        }
        )).subscribe((f) => this.basket = f);
  }


  public addFruitToBasket(fruit: string): void {
    if (!fruit) return;
    this.basket.push(fruit);
    setDoc(this.fruchtliste, { Fruechte: this.basket })
      .then(() => {
        console.log('daten gespeichert');
      });

  }
}
