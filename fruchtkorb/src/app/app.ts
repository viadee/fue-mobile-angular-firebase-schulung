import {Component, inject} from '@angular/core';
import {MatList, MatListItem} from '@angular/material/list';
import {FirestoreService} from './firestore/firestore.service';
import {AsyncPipe} from '@angular/common';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [
    MatList,
    AsyncPipe,
    MatListItem,
    MatButton
  ],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.scss'
})
export class App {
  public firestore = inject(FirestoreService);
}
