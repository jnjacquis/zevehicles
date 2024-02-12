import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import * as BrandsActions from './brands.actions';
import { BrandService } from "src/app/services/brand.service";

@Injectable()
export class BrandsEffects {

    constructor(private actions: Actions, private service: BrandService) { }

    getBrands$ = createEffect(() =>
        this.actions.pipe(
            ofType(BrandsActions.getAllBrands),
            mergeMap(() => {
                return this.service.getBrands()
                    .pipe(
                        map((brands) => BrandsActions.getAllBrandsSuccess({ brands })),
                        catchError(error => of(BrandsActions.getAllBrandsFailure({ error: error.message })))
                    );
            })
        )
    );
}