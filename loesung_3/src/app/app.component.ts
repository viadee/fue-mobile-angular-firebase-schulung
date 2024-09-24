import { LowerCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FruitComponent } from './fruit/fruit.component';
import { FruitListComponent } from './fruit-list/fruit-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, FruitComponent, FruitListComponent, LowerCasePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public basket: string[] = [];

  public addFruitToBasket(fruit: string): void {
    this.basket.push(fruit);
  }
}
