import { NgIf, NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruit-list',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './fruit-list.component.html',
  styleUrl: './fruit-list.component.scss'
})
export class FruitListComponent implements OnInit {
  @Input()
  fruitList: string[] = [];

  constructor() {}

  ngOnInit(): void {}

}
