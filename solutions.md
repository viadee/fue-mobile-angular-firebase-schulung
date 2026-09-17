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

### Bonus: Nur Namen mit mehr als fünf Buchstaben anzeigen

```html
<mat-list>
  @for (fruit of basket; track $index) {
    @if (fruit.name.length > 5) {
      <mat-list-item>{{ fruit.name }}</mat-list-item>
    }
  } @empty {
    <p>Liste ist leer!</p>
  }
</mat-list>
```

### app.scss File
```
```

## Aufgabe 2: Service & Observable

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

## Aufgabe 3: Data Binding

### `app.html`

```html
<mat-list>
  @for (fruit of fruitService.fruits$ | async; track $index) {
    <mat-list-item>{{ fruit.name }}</mat-list-item>
  } @empty {
    <p>Liste ist leer!</p>
  }
</mat-list>

<div>
  <mat-form-field>
    <mat-label>Name der Frucht</mat-label>
    <input
      #fruitInput
      matInput
      type="text"
      [value]="newFruit()"
      (input)="newFruit.set(fruitInput.value)"
    >
  </mat-form-field>

  <button mat-flat-button (click)="fruitService.addFruit(newFruit())">
    Frucht hinzufügen
  </button>
</div>
```

### `app.ts`

```typescript
import {AsyncPipe} from '@angular/common';
import {Component, inject, signal} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatList, MatListItem} from '@angular/material/list';
import {MockFruitService} from './shared/services/mock-fruit.service';

@Component({
  selector: 'app-root',
  imports: [
    AsyncPipe,
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    MatList,
    MatListItem
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  public readonly fruitService = inject(MockFruitService);
  public readonly newFruit = signal('');
}
```

### Bonus: Namen kleingeschrieben anzeigen

In `app.ts` zusätzlich `LowerCasePipe` importieren:

```typescript
import {AsyncPipe, LowerCasePipe} from '@angular/common';
```

Anschließend `LowerCasePipe` zum `imports`-Array hinzufügen und die Ausgabe in `app.html` anpassen:

```html
<mat-list-item>{{ fruit.name | lowercase }}</mat-list-item>
```

## Aufgabe 4: Interaktion zwischen Komponenten

### `app.html`

```html
@if (fruitService.fruits$ | async; as fruits) {
  <mat-list>
    @for (fruit of fruits; track $index) {
      <mat-list-item>
        {{ fruit.name }}
        @if (favouriteIndex() === $index) {
          *
        }
      </mat-list-item>
    }
  </mat-list>

  <div>
    <mat-form-field>
      <mat-label>Name der Frucht</mat-label>
      <input
        #fruitInput
        matInput
        type="text"
        [value]="newFruit()"
        (input)="newFruit.set(fruitInput.value)"
      >
    </mat-form-field>

    <button mat-flat-button (click)="fruitService.addFruit(newFruit())">
      Frucht hinzufügen
    </button>
  </div>

  <app-favourite
    [fruits]="fruits"
    (favouriteChanged)="favouriteIndex.set($event)"
  ></app-favourite>
}
```

### `app.ts`

```typescript
import {AsyncPipe} from '@angular/common';
import {Component, inject, signal} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatList, MatListItem} from '@angular/material/list';
import {Favourite} from './favourite/favourite';
import {MockFruitService} from './shared/services/mock-fruit.service';

@Component({
  selector: 'app-root',
  imports: [
    AsyncPipe,
    Favourite,
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    MatList,
    MatListItem
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  public readonly fruitService = inject(MockFruitService);
  public readonly newFruit = signal('');
  public readonly favouriteIndex = signal<number | null>(null);
}
```

### `favourite.html`

```html
<mat-form-field>
  <mat-label>Lieblingsfrucht</mat-label>
  <mat-select (selectionChange)="favouriteChanged.emit($event.value)">
    @for (fruit of fruits(); track $index) {
      <mat-option [value]="$index">{{ fruit.name }}</mat-option>
    }
  </mat-select>
</mat-form-field>
```

### `favourite.ts`

```typescript
import {Component, input, output} from '@angular/core';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatOption, MatSelect} from '@angular/material/select';
import {Fruit} from '../shared/models/fruit.model';

@Component({
  selector: 'app-favourite',
  imports: [
    MatFormField,
    MatLabel,
    MatOption,
    MatSelect
  ],
  templateUrl: './favourite.html',
  styleUrl: './favourite.scss'
})
export class Favourite {
  public readonly fruits = input.required<readonly Fruit[]>();
  public readonly favouriteChanged = output<number>();
}
```

### Bonus: Favoriten mit einer CSS-Klasse hervorheben

In `app.html` erhält das Listenelement die Klasse abhängig vom Signalwert:

```html
<mat-list-item
  [class.favourite]="favouriteIndex() === $index"
>
  {{ fruit.name }}
  @if (favouriteIndex() === $index) {
    *
  }
</mat-list-item>
```

### `app.scss`

```scss
.favourite {
  background-color: #ff5546;
}
```
