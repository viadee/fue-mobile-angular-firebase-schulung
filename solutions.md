# Lösungen für die Coding-Aufgaben

## Aufgabe 1: Control Flow

### `app.html`

```html
<mat-list>
  @for (fruit of basket; track $index) {
    <mat-list-item>{{ fruit.name }}</mat-list-item>
  } @empty {
    <p>Liste ist leer!</p>
  }
</mat-list>
```

### `app.ts`

```typescript
import { Component } from '@angular/core';
import { MatList, MatListItem } from '@angular/material/list';
import { Fruit } from './shared/models/fruit.model';

@Component({
  selector: 'app-root',
  imports: [
    MatList,
    MatListItem
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  public basket: Fruit[] = [
    {name: 'Apfel'},
    {name: 'Banane'}
  ];
}
```

### app.scss File
```
```

## Aufgabe 2: Service & Observable

Der echte `FirestoreService` kann vorgeführt werden. Für die Übung wird der vorbereitete `MockFruitService` verwendet. Er stellt mit `fruits$` und `addFruit()` dieselbe Schnittstelle bereit, benötigt aber keine Firebase-Anbindung.

### `mock-fruit.service.ts`

```typescript
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Fruit} from '../models/fruit.model';

@Injectable({
  providedIn: 'root'
})
export class MockFruitService {
  private readonly fruitsSubject = new BehaviorSubject<Fruit[]>([
    {name: 'Apfel'},
    {name: 'Banane'}
  ]);

  public readonly fruits$: Observable<Fruit[]> = this.fruitsSubject.asObservable();

  public addFruit(name: string): void {
    const fruits = [...this.fruitsSubject.value, {name}]
      .sort((first, second) => first.name.localeCompare(second.name));

    this.fruitsSubject.next(fruits);
  }
}
```

### `app.html`

```html
<mat-list>
  @for (fruit of fruitService.fruits$ | async; track $index) {
    <mat-list-item>{{ fruit.name }}</mat-list-item>
  } @empty {
    <p>Liste ist leer!</p>
  }
</mat-list>
```

### `app.ts`

```typescript
import {Component, inject} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {MatList, MatListItem} from '@angular/material/list';
import {MockFruitService} from './shared/services/mock-fruit.service';

@Component({
  selector: 'app-root',
  imports: [
    MatList,
    MatListItem,
    AsyncPipe
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  public fruitService = inject(MockFruitService);
}
```

### app.scss File
```
```

## Aufgabe 4 Data Binding:

### app.html File
```
<mat-list>
    @for(fruit of firestore.fruits$ | async; track $index) {
      <mat-list-item>{{fruit.name}}</mat-list-item>
    } @empty {
      <p>Liste ist leer!</p>
    }
</mat-list>
<div>
  <mat-form-field>
    <input matInput type="text" [(ngModel)]="newFruit">
  </mat-form-field>
  <button mat-flat-button (click)="firestore.addFruit(newFruit)">Add fruit</button>
</div>
```

### app.ts File
```
import {Component, inject} from '@angular/core';
import {FirestoreService} from './firestore/firestore.service';
import {MatList, MatListItem} from '@angular/material/list';
import {MatFormField} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [
    MatList,
    MatListItem
  ],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.scss'
})
export class App {
  public firestoreService = inject(FirestoreService)
  public newFruit: string = "";
}
```

### app.scss File
```
```

## Aufgabe 5 Interaktion zwischen Komponenten:

### app.html File
```
@if(firestore.fruits$ | async; as fruits) {
  <mat-list>
    @for(fruit of fruits; track $index) {
      <mat-list-item [ngClass]="{'favourite': favourite === $index}">{{fruit.name}}</mat-list-item>
    }
  </mat-list>
  <div>
    <mat-form-field>
      <input matInput type="text" [(ngModel)]="newFruit">
    </mat-form-field>
    <button mat-flat-button (click)="firestore.addFruit(newFruit)">Add fruit</button>
  </div>
  <app-favourite [fruits]="fruits" (favouriteChanged)="favourite = $event"></app-favourite>
}
```

### app.ts File
```
import {Component, inject} from '@angular/core';
import {MatList, MatListItem} from '@angular/material/list';
import {FirestoreService} from './firestore/firestore.service';
import {AsyncPipe, NgClass} from '@angular/common';
import {Favourite} from './favourite/favourite';
import {MatFormField} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [
    MatList,
    AsyncPipe,
    MatListItem,
    Favourite,
    NgClass,
    MatFormField,
    MatInput,
    MatButton,
    FormsModule,
  ],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.scss'
})
export class App {
  public firestore = inject(FirestoreService);

  public newFruit: string = "";

  public favourite: number = -1;
}
```

### app.scss File
```
.favourite {
  background-color: #ff5546;
}
```

### favourite.html File
```
<mat-form-field>
  <mat-select (selectionChange)="favouriteChanged.emit($event.value)">
    @for(fruit of fruits; track $index) {
      <mat-option [value]="$index">{{fruit.name}}</mat-option>
    }
  </mat-select>
</mat-form-field>
```

### favourite.ts File
```
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatFormField} from '@angular/material/form-field';
import {MatOption, MatSelect} from '@angular/material/select';
import {Fruit} from '../firestore/fruit.model';

@Component({
  selector: 'app-favourite',
  imports: [
    MatFormField,
    MatSelect,
    MatOption
  ],
  templateUrl: './favourite.html',
  standalone: true,
  styleUrl: './favourite.scss'
})
export class Favourite {
  @Input()
  public fruits: Fruit[] = [];

  @Output()
  public favouriteChanged = new EventEmitter<number>();
}
```

### favourite.scss File
```
```
