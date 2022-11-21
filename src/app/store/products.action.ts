import { createAction, props } from "@ngrx/store";
import { Product } from "../models/product";
import { ProductResponseModel } from "../models/productResponseModel";

export const invokeProductsAPI = createAction(
    "[Product API] invoke products Fetch API"
)
export const productsFetchAPISuccess = createAction(
    "[Product API] products fetch api success",
    props<{allProducts:Product[]}>()
)