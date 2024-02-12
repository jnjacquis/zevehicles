import { BrandsState } from "./domain/brands.state";
import { ModelsState } from "./domain/models.state";

export interface AppState {
    brands: BrandsState;
    models: ModelsState;
}