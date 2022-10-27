import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Category } from "src/app/models/category";

export enum RequestState {
    idle,
    inprogress,
    fail,
    success
}

export interface CategoryState extends EntityState<Category> {
    request: RequestState

}

export const categoryAdapter: EntityAdapter<Category> = createEntityAdapter<Category>();
