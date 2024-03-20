import { Component } from '@angular/core';
import { LowerCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [FormsModule, LowerCasePipe]
})
export class AppComponent {
  title = 'Fruit Shop Capstone';

  public fruit = '';

  public resetFruit(): void {
    this.fruit = '';
  }
}
