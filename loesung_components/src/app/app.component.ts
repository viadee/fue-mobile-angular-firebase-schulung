import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FruitComponent } from './fruit/fruit.component';
import { FruitListComponent } from './fruit-list/fruit-list.component';

@Component({
  selector: 'app-root',
  imports: [FormsModule, FruitComponent, FruitListComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public basket: string[] = [];

  public addFruitToBasket(fruit: string): void {
    this.basket.push(fruit);
  }
}
