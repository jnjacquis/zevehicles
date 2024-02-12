import { createAction, props } from '@ngrx/store';
import { Model } from 'src/app/domain/model';

// Actions to get/read all vehicle models from the remote resource Firebase platform
export const getAllModels = createAction('[Models] Get all models');
export const getAllModelsSuccess = createAction('[Models] Get all models success', props<{ models: Model[] }>());
export const getAllModelsFailure = createAction('[Models] Get all models failure', props<{ error: string }>());

// Actions to create a new vehicle model to the remote resource Firebase platform
export const createNewModel = createAction('[Models] Create a new model', props<{ newModel: Model }>());
export const createNewModelSuccess = createAction('[Models] Create a new model', props<{ model: Model }>());
export const createNewModelFailure = createAction('[Models] Create a new model', props<{ error: string }>());
