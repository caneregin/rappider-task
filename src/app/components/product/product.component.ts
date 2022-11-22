import { ProductResponseModel } from './../../models/productResponseModel';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { HttpClient } from "@angular/common/http"
import { select, Store } from '@ngrx/store';
import { selectProducts } from 'src/app/store/products.selector';
import { invokeProductsAPI } from 'src/app/store/products.action';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private store: Store) {
  }
  products$ = this.store.pipe(select(selectProducts))
  //displayedColumns: string[] = ['id', 'title', 'description', 'price','discountPercentage', 'rating', 'stock', 'brand','category', 'thumbnail', 'images', 'salesAmount',"salesDescription"];
  dataSource = this.products$;
  
  ngOnInit(): void {
    this.store.dispatch(invokeProductsAPI())
  }
}
