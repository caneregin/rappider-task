import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './models/product';
import { ProductResponseModel } from './models/productResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  pId = 2
  apiUrl = "https://dummyjson.com/products"
  ByIdapiUrl = "https://dummyjson.com/products/"+this.pId
  constructor(private http:HttpClient) { }
  get(){
    return this.http.get<ProductResponseModel>(this.apiUrl)
  }
  getById(){
    return this.http.get<Product>(this.ByIdapiUrl)
  }
}
