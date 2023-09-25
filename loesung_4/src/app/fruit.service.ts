import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FruitService {

  constructor(private http: HttpClient) { 
  }
  
  getFruits(): Observable<string[]>{
    const url = 'http://localhost:3333/api';
    return this.http.get<string[]>(url + "/fruits");
  }
}
