import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap, map } from "rxjs";
import { ProductsService } from "../products.service";
import { invokeProductsAPI, productsFetchAPISuccess } from "./products.action";

@Injectable()
export class ProductsEffects {
    constructor(private actions$:Actions,
        private productService:ProductsService){}

        loadAllProducts$ = createEffect(()=>
        this.actions$.pipe(
            ofType(invokeProductsAPI),
            switchMap(()=>{
                return this.productService.get()
                .pipe(
                    map((data)=>productsFetchAPISuccess({allProducts: data.products}))
                    )
            })
        ))
}
