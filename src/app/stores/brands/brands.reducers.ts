import { createReducer, on } from '@ngrx/store';
import { BrandsState } from 'src/app/domain/brands.state';
import * as BrandsActions from './brands.actions';

export const initialState: BrandsState = {
    isLoading: false,
    brands: [],
    error: null
};

export const brandsReducers = createReducer(
    initialState,
    on(BrandsActions.getAllBrands, (state) => ({...state, isLoading: true })),
    on(BrandsActions.getAllBrandsSuccess, (state, action) => ({...state, isLoading: false, brands: action.brands })),
    on(BrandsActions.getAllBrandsFailure, (state, action) => ({...state, isLoading: false, error: action.error }))
);