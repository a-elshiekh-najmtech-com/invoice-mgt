import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { categoryAdapter, CategoryState } from "./category.state";

const {
    selectIds,
    selectEntities,
    selectTotal,
    selectAll
} = categoryAdapter.getSelectors();


export const selectAppState = createFeatureSelector<AppState>('State');

export const selectCategoriesState = createSelector(selectAppState, state => state.categories);

export const selectCategoryIds = createSelector(selectCategoriesState, selectIds);
export const selectCategoryEntities = createSelector(selectCategoriesState, selectEntities);
export const selectCategories = createSelector(selectCategoriesState, selectAll);
export const selectCategoryTotal = createSelector(selectCategoriesState, selectTotal);
export const selectCategoryById = (id) => createSelector(selectCategoryEntities, categories => categories[id]);

export const selectCategoryLoading = createSelector(selectCategoriesState, state => state.loading);
export const selectCategoryRequest = createSelector(selectCategoriesState, state => state.request);
