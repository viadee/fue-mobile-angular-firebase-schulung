import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruit-list',
  standalone: true,
  templateUrl: './fruit-list.component.html',
  styleUrl: './fruit-list.component.scss'
})
export class FruitListComponent implements OnInit {
  @Input()
  fruitList: string[] = [];

  constructor() {}

  ngOnInit(): void {}

}
