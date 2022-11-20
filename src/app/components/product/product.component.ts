import { ProductResponseModel } from './../../models/productResponseModel';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { HttpClient } from "@angular/common/http"

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:Product[] = []
  productResponseModel:ProductResponseModel={
    products : this.products
  }
  apiUrl = "https://dummyjson.com/products"
  constructor(private httpClient: HttpClient) { 

  }
  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.httpClient.get<ProductResponseModel>(this.apiUrl).subscribe((response) => {
      this.products = response.products
      console.log(this.products)
    })
  }

}
