import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/app.state";

export const selectModels = (state: AppState) => state.models;

export const isLoadingModelsSelector = createSelector(
    selectModels, (state) => state.isLoading
);

export const modelsSelector = createSelector(
    selectModels, (state) => state.models
);

export const errorModelsSelector = createSelector(
    selectModels, (state) => state.error
);

export const newModelSelector = createSelector(
    selectModels, (state) => state.newModel
);
