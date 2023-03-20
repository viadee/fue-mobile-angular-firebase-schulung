import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public basket: string[] = [];

  public addFruitToBasket(fruit: string): void {
    this.basket.push(fruit);
  }
}
