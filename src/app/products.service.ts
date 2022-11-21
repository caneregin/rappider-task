import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './models/product';
import { ProductResponseModel } from './models/productResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiUrl = "https://dummyjson.com/products"
  constructor(private http:HttpClient) { }
  get(){
    return this.http.get<ProductResponseModel>(this.apiUrl)
  }
}
