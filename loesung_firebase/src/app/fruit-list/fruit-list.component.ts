import { Component, Input, OnInit } from '@angular/core';
import {MatList, MatListItem} from "@angular/material/list";

@Component({
    selector: 'app-fruit-list',
    standalone: true,
    templateUrl: './fruit-list.component.html',
    imports: [
        MatList,
        MatListItem
    ],
    styleUrl: './fruit-list.component.scss'
})
export class FruitListComponent implements OnInit {
  @Input()
  fruitList: string[] = [];

  constructor() {}

  ngOnInit(): void {}

}
