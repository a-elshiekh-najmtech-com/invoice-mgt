import { createAction, props } from '@ngrx/store';
import { Category } from 'src/app/models/category';


export const loadCategoriesRequest = createAction('[Category/API] Load Categories Request');
export const loadCategories = createAction('[Category/API] Load Categories', props<{ categories: Category[] }>());
export const loadCategoriesError = createAction('[Category/API] Load Categories Error');

export const deleteCategoryRequest = createAction('[Category/API] Delete Category Request', props<{ id: number }>());
export const deleteCategory = createAction('[Category/API] Delete Category', props<{ id: number }>());
export const deleteCategoryError = createAction('[Category/API] Delete Category Error');

export const createCategoryRequest = createAction('[Category/API] Create Category Request', props<{ category: Category }>());
export const createCategory = createAction('[Category/API] Create Category', props<{ category: Category }>());
export const createCategoryError = createAction('[Category/API] Create Category Error');

export const updateCategoryRequest = createAction('[Category/API] Update Category Request', props<{ category: Category }>());
export const updateCategory = createAction('[Category/API] Update Category', props<{ category: Category }>());
export const updateCategoryError = createAction('[Category/API] Update Category Error');
