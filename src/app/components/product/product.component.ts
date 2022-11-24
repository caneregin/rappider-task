import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/models/product';
import { select, Store } from '@ngrx/store';
import { selectProducts, selectProductsId } from 'src/app/store/products.selector';
import { ByIdinvokeProductsAPI, invokeProductsAPI, updateProduct } from 'src/app/store/products.action';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(private store: Store, private fb: UntypedFormBuilder) {}
  products$ = this.store.pipe(select(selectProducts))
  products2$ = this.store.pipe(select(selectProductsId))

  isVisible = false;
  validateForm!: UntypedFormGroup;

  ngOnInit(): void {
    this.store.dispatch(invokeProductsAPI())
    this.store.dispatch(ByIdinvokeProductsAPI())

    this.validateForm = this.fb.group({
      id: [null, [Validators.required]],
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      price: [null, [Validators.required]],
      discountPercentage: [null, [Validators.required]],
      rating: [null, [Validators.required]],
      brand: [null, [Validators.required]],
      category: [null, [Validators.required]],
      thumbnail: [null, [Validators.required]],
      images: [null, [Validators.required]],
      salesAmount: [null, [Validators.required]],
      salesDescription: [null, [Validators.required]],
      stock: [null, [Validators.required]],

    });
  }

  //FORM
  showModal(id:number): void {
    this.isVisible = true;
    console.log(id+" selected")
  }
  pid = 5
  handleOk(): void {
    this.isVisible = false;
  }
  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      const id = this.validateForm.value.id
      const title = this.validateForm.value.title
      const description = this.validateForm.value.description
      const price = this.validateForm.value.price
      const discountPercentage = this.validateForm.value.discountPercentage
      const rating = this.validateForm.value.rating
      const brand = this.validateForm.value.brand
      const category = this.validateForm.value.category
      const thumbnail = this.validateForm.value.thumbnail
      const images = this.validateForm.value.images
      const salesAmount = this.validateForm.value.salesAmount
      const salesDescription = this.validateForm.value.salesDescription
      const stock = this.validateForm.value.stock
      const product: Product = {
        id: parseInt(id),
        salesAmount: parseInt(salesAmount),
        title: title.toString(),
        description: description.toString(),
        price: parseInt(price),
        discountPercentage: parseInt(discountPercentage),
        rating: parseInt(rating),
        stock:parseInt(stock),
        brand: brand.toString(),
        category: category.toString(),
        thumbnail: thumbnail.toString(),
        images: images.toString(),
        salesDescription: salesDescription.toString()
      }
      this.store.dispatch(updateProduct({ product }))
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
