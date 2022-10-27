import { categoriesReducer } from "./category/category.reducer";
import { CategoryState } from "./category/category.state";

export interface AppState {
    categories: CategoryState
}

export const reducers = {
    // State name and it's reducer as key value pair dictinory 
    categories: categoriesReducer,
}
