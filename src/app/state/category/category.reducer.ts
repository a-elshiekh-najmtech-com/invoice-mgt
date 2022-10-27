import { Action, createReducer, on } from "@ngrx/store";
import { loadCategories } from './category.actions';
import { categoryAdapter, CategoryState } from "./category.state";


export const initialState: CategoryState = categoryAdapter.getInitialState();

export const reducer = createReducer(
    initialState,
    
    on(loadCategories, (state, { categories }) => {
        return categoryAdapter.setAll(categories, state);
    }),
);

export function categoriesReducer(state: CategoryState | undefined, action: Action) {
    return reducer(state, action);
}
