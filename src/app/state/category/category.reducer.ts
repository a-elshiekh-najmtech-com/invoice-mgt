import { Action, createReducer, on } from "@ngrx/store";
import { createCategory, deleteCategory, loadCategories } from './category.actions';
import { categoryAdapter, CategoryState } from "./category.state";


export const initialState: CategoryState = categoryAdapter.getInitialState();

export const reducer = createReducer(
    initialState,

    on(loadCategories, (state, { categories }) => {
        return categoryAdapter.setAll(categories, state);
    }),


    on(deleteCategory, (state, { id }) => {
        return categoryAdapter.removeOne(id, state);
    }),

    on(createCategory, (state, { category }) => {
        return categoryAdapter.addOne(category, state);
    }),

);

export function categoriesReducer(state: CategoryState | undefined, action: Action) {
    return reducer(state, action);
}
