# Lösungen für die Coding Aufgaben:

## Aufgabe 1:

### app.html File
```
<p>Hello World!<p>
```

### app.ts File
```
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.scss'
})
export class App {
  
}
```

### app.scss File
```
```

## Aufgabe 2:

### app.html File
```
<mat-form-field>
  <input type="text" matInput [(ngModel)]="value">
</mat-form-field>
<p>{{value}}</p>
<button mat-flat-button (click)="resetValue()">Delete</button>
```

### app.ts File
```
import {Component} from '@angular/core';
import {MatFormField} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [
    MatFormField,
    MatInput,
    FormsModule,
    MatButton
  ],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.scss'
})
export class App {
  public value = "";

  public resetValue() {
    this.value = "";
  }
}
```

### app.scss File
```
```

## Aufgabe 3:

### app.html File
```
<mat-list>
  @for(fruit of basket; track $index) {
    @if(fruit.name.length > 5) {
      <mat-list-item>{{fruit.name}}</mat-list-item>
    }
  } @empty {
    <p>Liste ist leer!</p>
  }
</mat-list>
```

### app.ts File
```
import {Component, inject} from '@angular/core';
import {Fruit} from './firestore/fruit.model';
import {FirestoreService} from './firestore/firestore.service';
import {MatList, MatListItem} from '@angular/material/list';

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
  private firestoreService = inject(FirestoreService)
  public basket: Fruit[] = [];

  constructor() {
    this.firestoreService.fruits$.subscribe((value) => this.basket = value);
  }
}
```

### app.scss File
```
```
