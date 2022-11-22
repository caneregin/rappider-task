import { createAction, props } from "@ngrx/store";
import { Product } from "../models/product";
import { ProductResponseModel } from "../models/productResponseModel";

export const invokeProductsAPI = createAction(
    "[Product API] invoke products Fetch API",
)
export const productsFetchAPISuccess = createAction(
    "[Product API] products fetch api success",
    props<{allProducts:Product[]}>()
)
export const UPDATE_PRODUCT_ACTION = "[Product API] update product"

export const updateProduct = createAction(UPDATE_PRODUCT_ACTION, props<{product:Product}>())

