import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.scss'],
})
export class FruitListComponent implements OnInit {
  @Input()
  fruitList: string[] = [];

  constructor() {}

  ngOnInit(): void {}
}
