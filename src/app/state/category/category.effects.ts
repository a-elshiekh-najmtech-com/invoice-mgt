import { Injectable } from "@angular/core";
import { CategoryService } from "src/app/services/categoy.service";
import * as actions from "./category.actions";
import { catchError, map, mergeMap } from "rxjs/operators";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";

@Injectable()
export class CategoriesEffects {


    constructor(private service: CategoryService, private actions$: Actions) {
    }

    loadCategories$ = createEffect(() => this.actions$.pipe(
        ofType(actions.loadCategoriesRequest),
        mergeMap(() =>
            this.service.getAll().pipe(
                map(categories => actions.loadCategories({ categories })),
                catchError(error => of(actions.loadCategoriesError()))
            )
        )
    ));

    deleteCategory$ = createEffect(() => this.actions$.pipe(
        ofType(actions.deleteCategoryRequest),
        mergeMap(payload =>
            this.service.delete(payload.id).pipe(
                map(() => actions.deleteCategory({ id: payload.id })),
                catchError(error => of(actions.deleteCategoryError()))
            )
        )
    ));

    createCategory$ = createEffect(() => this.actions$.pipe(
        ofType(actions.createCategoryRequest),
        mergeMap(payload =>
            this.service.create(payload.category).pipe(
                map(category => actions.createCategory({ category })),
                catchError(error => of(actions.createCategoryError()))
            )
        )
    ));

    updateCategory$ = createEffect(() => this.actions$.pipe(
        ofType(actions.updateCategoryRequest),
        mergeMap(payload =>
            this.service.update(payload.category.id, payload.category).pipe(
                map(category => actions.updateCategory({ category: payload.category })),
                catchError(error => of(actions.updateCategoryError()))
            )
        )
    ));

}