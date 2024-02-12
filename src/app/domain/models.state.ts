import { Model } from "./model";

export interface ModelsState {
    isLoading: boolean;
    models: Model[];
    newModel: Model | null;
    error: string | null;
}