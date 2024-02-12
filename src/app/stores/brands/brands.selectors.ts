import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/app.state";

export const selectBrands = (state: AppState) => state.brands;

export const isLoadingBrandsSelector = createSelector(
    selectBrands, (state) => state.isLoading
);

export const brandsSelector = createSelector(
    selectBrands, (state) => state.brands
);

export const errorBrandsSelector = createSelector(
    selectBrands, (state) => state.error
);
