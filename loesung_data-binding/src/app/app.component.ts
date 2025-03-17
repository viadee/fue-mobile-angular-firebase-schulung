import { LowerCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-root',
  imports: [FormsModule, LowerCasePipe, MatFormField, MatInput, MatButton, MatLabel],
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
