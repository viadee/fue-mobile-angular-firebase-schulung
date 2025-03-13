import { LowerCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, LowerCasePipe],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Welcome';
  zeigtWelcome = true;
  public fruit = '';


  public changeTitle() {
    this.title = this.zeigtWelcome ?  'Hello':'Welcome';
    this.zeigtWelcome = !this.zeigtWelcome;
  }

  public resetFruit(): void {
    this.fruit = '';
  }
}
