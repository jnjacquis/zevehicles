import { createAction, props } from '@ngrx/store';
import { Brand } from 'src/app/domain/brand';

export const getAllBrands = createAction('[Brands] Get all brands');
export const getAllBrandsSuccess = createAction('[Brands] Get all brands success', props<{ brands: Brand[] }>());
export const getAllBrandsFailure = createAction('[Brands] Get all brands failure', props<{ error: string }>());