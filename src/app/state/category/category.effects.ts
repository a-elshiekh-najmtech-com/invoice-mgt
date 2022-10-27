import { Injectable } from "@angular/core";
import { CategoryService } from "src/app/services/categoy.service";
import { loadCategories, loadCategoriesRequest } from "./category.actions";
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


}