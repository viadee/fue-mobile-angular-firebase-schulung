import { Component, Input, OnInit } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';

@Component({
    selector: 'app-fruit-list',
    templateUrl: './fruit-list.component.html',
    styleUrls: ['./fruit-list.component.scss'],
    standalone: true,
    imports: [NgIf, NgFor],
})
export class FruitListComponent implements OnInit {
  @Input()
  fruitList: string[] = [];

  constructor() {}

  ngOnInit(): void {}
}
