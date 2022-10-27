import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Category } from "src/app/models/category";

export interface CategoryState extends EntityState<Category> {
    loading: boolean
}

export const categoryAdapter: EntityAdapter<Category> = createEntityAdapter<Category>();
