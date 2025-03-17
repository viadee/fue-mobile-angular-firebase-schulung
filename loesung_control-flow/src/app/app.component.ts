import { LowerCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatList, MatListItem} from '@angular/material/list';
import {MatButton} from '@angular/material/button';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';

@Component({
  selector: 'app-root',
  imports: [FormsModule, LowerCasePipe, MatList, MatListItem, MatButton, MatFormField, MatInput, MatLabel, ReactiveFormsModule],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Welcome';
  zeigtWelcome = true;
  public fruit = '';
  public basket: string[] = ['Apfel', 'Banane'];


  public changeTitle() {
    this.title = this.zeigtWelcome ?  'Hello':'Welcome';
    this.zeigtWelcome = !this.zeigtWelcome;
  }

  public resetFruit(): void {
    this.fruit = '';
  }
}
