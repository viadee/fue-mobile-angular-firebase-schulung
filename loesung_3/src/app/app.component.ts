import { Component } from '@angular/core';
import { FruitListComponent } from './fruit-list/fruit-list.component';
import { FruitComponent } from './fruit/fruit.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [FruitComponent, FruitListComponent]
})
export class AppComponent {
  public basket: string[] = [];

  public addFruitToBasket(fruit: string): void {
    this.basket.push(fruit);
  }
}
