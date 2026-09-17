import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Fruit} from '../models/fruit.model';

@Injectable({
  providedIn: 'root'
})
export class MockFruitService {
  private readonly fruitsSubject = new BehaviorSubject<Fruit[]>([
    {name: 'Apfel'},
    {name: 'Banane'}
  ]);

  public readonly fruits$: Observable<Fruit[]> = this.fruitsSubject.asObservable();

  public addFruit(name: string): void {
    const fruits = [...this.fruitsSubject.value, {name}]
      .sort((first, second) => first.name.localeCompare(second.name));

    this.fruitsSubject.next(fruits);
  }
}