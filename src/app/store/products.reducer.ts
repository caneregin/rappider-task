import { createReducer, on } from "@ngrx/store";
import { Product } from "../models/product";
import { ProductResponseModel } from "../models/productResponseModel";
import { productsFetchAPISuccess } from "./products.action";

export const initialState: ReadonlyArray<Product> = []

export const productReducer = createReducer(
    initialState,
    on(productsFetchAPISuccess, (state, { allProducts }) => {
      var updatedProducts = []
      for(let i=0;i<allProducts.length;i++){
      let tempUpdate = allProducts[i]
      tempUpdate={...tempUpdate,salesAmount:0}
      tempUpdate={...tempUpdate,salesDescription:""}
      updatedProducts.push(tempUpdate)
      }
      console.log(updatedProducts)
      return updatedProducts;
    })
  );