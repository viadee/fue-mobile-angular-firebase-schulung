import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FruitService {

  readonly baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {
  }

  getFruits(): Observable<string[]>{
    return this.http.get<string[]>(this.baseUrl + "/fruits");
  }

  addFruit(fruit: string): void {
    this.http.post<string[]>(this.baseUrl + "/fruits", {fruit}).subscribe();
  }
}
