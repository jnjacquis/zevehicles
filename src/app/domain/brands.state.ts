import { Brand } from "./brand";

export interface BrandsState {
    isLoading: boolean;
    brands: Brand[];
    error: string | null;
}