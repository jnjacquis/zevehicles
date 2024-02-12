import { createReducer, on } from '@ngrx/store';
import { ModelsState } from 'src/app/domain/models.state';
import * as ModelsActions from '../models/models.actions';

export const initialState: ModelsState = {
    isLoading: false,
    models: [],
    newModel: null,
    error: null
};

export const brandsReducers = createReducer(
    initialState,
    on(ModelsActions.getAllModels, (state) => ({...state, isLoading: true })),
    on(ModelsActions.getAllModelsSuccess, (state, action) => ({...state, isLoading: false, models: action.models })),
    on(ModelsActions.getAllModelsFailure, (state, action) => ({...state, isLoading: false, error: action.error })),
    on(ModelsActions.createNewModel, (state, action) => ({...state, newModel: action.newModel }))
);