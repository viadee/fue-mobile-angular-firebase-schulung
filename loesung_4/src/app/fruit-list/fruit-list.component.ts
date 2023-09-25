import { Component, Input, OnInit } from '@angular/core';
import { FruitService } from '../fruit.service';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.scss'],
})
export class FruitListComponent implements OnInit {
  @Input()
  fruitList: string[] = [];

  constructor(private fruitService: FruitService) {
    fruitService.getFruits().subscribe(value => console.log(value));
  }

  ngOnInit(): void {}
}