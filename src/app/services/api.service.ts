import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http:HttpClient) { }
  getAllItem(){
    return this.http.get('https://fakestoreapi.com/products/category/jewelery')
  }
  getJoke(){
    return this.http.get('https://api.chucknorris.io/jokes/random')
  }
}
