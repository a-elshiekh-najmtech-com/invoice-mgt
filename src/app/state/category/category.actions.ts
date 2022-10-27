import { createAction, props } from '@ngrx/store';
import { Category } from 'src/app/models/category';


export const loadCategories = createAction('[Category/API] Load Categories', props<{ categories: Category[] }>());
