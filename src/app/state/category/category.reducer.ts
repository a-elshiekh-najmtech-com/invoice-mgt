import { Action, createReducer, on } from "@ngrx/store";
import * as actions from './category.actions';
import { categoryAdapter, CategoryState, RequestState } from "./category.state";


export const initialState: CategoryState = categoryAdapter.getInitialState(
    {
        loading: false,
        request: RequestState.idle
    }
);

export const reducer = createReducer(
    initialState,

    on(actions.loadCategoriesRequest, (state) => {
        return { ...state, loading: true, request: RequestState.inprogress };
    }),
    on(actions.loadCategories, (state, { categories }) => {
        return categoryAdapter.setAll(categories, { ...state, loading: false, request: RequestState.success });
    }),
    on(actions.loadCategoriesError, (state) => {
        return { ...state, loading: false, request: RequestState.fail };
    }),


    on(actions.deleteCategoryRequest, (state) => {
        return { ...state, loading: true, request: RequestState.inprogress };
    }),
    on(actions.deleteCategory, (state, { id }) => {
        return categoryAdapter.removeOne(id, { ...state, loading: false, request: RequestState.success });
    }),
    on(actions.deleteCategoryError, (state) => {
        return { ...state, loading: false, request: RequestState.fail };
    }),

    on(actions.createCategoryRequest, (state) => {
        return { ...state, loading: true, request: RequestState.inprogress };
    }),
    on(actions.createCategory, (state, { category }) => {
        return categoryAdapter.addOne(category, { ...state, loading: false, request: RequestState.success });
    }),
    on(actions.createCategoryError, (state) => {
        return { ...state, loading: false, request: RequestState.fail };
    }),

    on(actions.updateCategoryRequest, (state) => {
        return { ...state, loading: true, request: RequestState.inprogress };
    }),
    on(actions.updateCategory, (state, { category }) => {
        return categoryAdapter.updateOne({ id: category.id, changes: category }, { ...state, loading: false, request: RequestState.success });
    }),
    on(actions.updateCategoryError, (state) => {
        return { ...state, loading: false, request: RequestState.fail };
    }),


);

export function categoriesReducer(state: CategoryState | undefined, action: Action) {
    return reducer(state, action);
}
