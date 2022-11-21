import { ProductResponseModel } from './../models/productResponseModel';
import { Product } from './../models/product';
import { createFeatureSelector } from "@ngrx/store";

export const selectProducts = createFeatureSelector<Product[]>("myproduct")