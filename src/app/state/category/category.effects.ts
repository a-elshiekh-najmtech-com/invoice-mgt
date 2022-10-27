import { Injectable } from "@angular/core";
import { CategoryService } from "src/app/services/categoy.service";
import { createCategory, createCategoryRequest, deleteCategory, deleteCategoryRequest, loadCategories, loadCategoriesRequest } from "./category.actions";
import { map, mergeMap } from "rxjs/operators";
import { Actions, createEffect, ofType } from "@ngrx/effects";

@Injectable()
export class CategoriesEffects {


    constructor(private service: CategoryService, private actions$: Actions) {
    }

    loadCategories$ = createEffect(() => this.actions$.pipe(
        ofType(loadCategoriesRequest),
        mergeMap(() =>
            this.service.getAll().pipe(
                map(categories => loadCategories({ categories })),
                // catchError(error => of(loadCategories.actionFailure({ error })))
            )
        )
    ));

    deleteCategory$ = createEffect(() => this.actions$.pipe(
        ofType(deleteCategoryRequest),
        mergeMap(payload =>
            this.service.delete(payload.id).pipe(
                map(() => deleteCategory({ id: payload.id })),
                // catchError(error => of(loadCategories.actionFailure({ error })))
            )
        )
    ));

    createCategory$ = createEffect(() => this.actions$.pipe(
        ofType(createCategoryRequest),
        mergeMap(payload =>
            this.service.create(payload.category).pipe(
                map(category => createCategory({ category })),
                // catchError(error => of(loadCategories.actionFailure({ error })))
            )
        )
    ));

}