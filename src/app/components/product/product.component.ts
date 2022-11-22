import { ProductResponseModel } from './../../models/productResponseModel';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { HttpClient } from "@angular/common/http"
import { select, Store } from '@ngrx/store';
import { selectProducts } from 'src/app/store/products.selector';
import { invokeProductsAPI, updateProduct } from 'src/app/store/products.action';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private store: Store,private fb: UntypedFormBuilder) {
  }
  products$ = this.store.pipe(select(selectProducts))
  //displayedColumns: string[] = ['id', 'title', 'description', 'price','discountPercentage', 'rating', 'stock', 'brand','category', 'thumbnail', 'images', 'salesAmount',"salesDescription"];
  //dataSource = this.products$;
  isVisible = false;
  validateForm!: UntypedFormGroup;

  ngOnInit(): void {
    this.store.dispatch(invokeProductsAPI())
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }
  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      const username = this.validateForm.value.userName
      const password = this.validateForm.value.password
      console.log("ilki"+username+"ikinci"+password)
      const product: Product = {
        id: 1,
        salesAmount: 5,
        title: '',
        description: '',
        price: 0,
        discountPercentage: 0,
        rating: 0,
        stock: 0,
        brand: '',
        category: '',
        thumbnail: '',
        images: '',
        salesDescription: ''
      }
      this.store.dispatch(updateProduct({product}))
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
