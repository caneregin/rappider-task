import { productReducer } from './../store/products.reducer';
import { StoreModule } from '@ngrx/store';
import { ProductComponent } from './../components/product/product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from '../store/products.effect';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    StoreModule.forFeature("myproduct",productReducer),
    EffectsModule.forFeature([ProductsEffects])
  ]
})
export class ProductsModule { }
