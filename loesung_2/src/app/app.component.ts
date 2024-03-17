import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Fruit Shop Capstone';

  public fruit = '';

  public resetFruit(): void {
    this.fruit = '';
  }
}
