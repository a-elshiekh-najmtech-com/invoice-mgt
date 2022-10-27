import { Action, createReducer, on } from "@ngrx/store";
import * as actions from './category.actions';
import { categoryAdapter, CategoryState } from "./category.state";


export const initialState: CategoryState = categoryAdapter.getInitialState({ loading: false });

export const reducer = createReducer(
    initialState,

    on(actions.loadCategoriesRequest, (state) => {
        return { ...state, loading: true };
    }),
    on(actions.loadCategories, (state, { categories }) => {
        return categoryAdapter.setAll(categories, { ...state, loading: false });
    }),
    on(actions.loadCategoriesError, (state) => {
        return { ...state, loading: false };
    }),


    on(actions.deleteCategoryRequest, (state) => {
        return { ...state, loading: true };
    }),
    on(actions.deleteCategory, (state, { id }) => {
        return categoryAdapter.removeOne(id, { ...state, loading: false });
    }),
    on(actions.deleteCategoryError, (state) => {
        return { ...state, loading: false };
    }),

    on(actions.createCategoryRequest, (state) => {
        return { ...state, loading: true };
    }),
    on(actions.createCategory, (state, { category }) => {
        return categoryAdapter.addOne(category, { ...state, loading: false });
    }),
    on(actions.createCategoryError, (state) => {
        return { ...state, loading: false };
    }),

    on(actions.updateCategoryRequest, (state) => {
        return { ...state, loading: true };
    }),
    on(actions.updateCategory, (state, { category }) => {
        return categoryAdapter.updateOne({ id: category.id, changes: category }, { ...state, loading: false }   );
    }),
    on(actions.updateCategoryError, (state) => {
        return { ...state, loading: false };
    }),


);

export function categoriesReducer(state: CategoryState | undefined, action: Action) {
    return reducer(state, action);
}
