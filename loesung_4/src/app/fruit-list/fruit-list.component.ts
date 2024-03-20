import {Component, OnInit} from '@angular/core';
import {FruitService} from '../fruit.service';
import { NgIf, NgFor } from '@angular/common';

@Component({
    selector: 'app-fruit-list',
    templateUrl: './fruit-list.component.html',
    styleUrls: ['./fruit-list.component.scss'],
    standalone: true,
    imports: [NgIf, NgFor],
})
export class FruitListComponent implements OnInit{
  fruitList: string[] = [];

  constructor(private fruitService: FruitService) {
  }

  ngOnInit(): void {
    this.getFruits();
  }

  getFruits(): void{
    this.fruitService.getFruits().subscribe(value => this.fruitList = value
    );
  }
}
