import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Category } from "src/app/models/category";

export interface CategoryState extends EntityState<Category> {
    //TODO: Add Loading indicator
}

export const categoryAdapter: EntityAdapter<Category> = createEntityAdapter<Category>();
