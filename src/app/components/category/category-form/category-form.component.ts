import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, skip, takeWhile } from 'rxjs/operators';
import { AppState } from 'src/app/state/app.state';
import { createCategoryRequest, updateCategoryRequest } from 'src/app/state/category/category.actions';
import { selectCategoryById, selectCategoryLoading, selectCategoryRequest } from 'src/app/state/category/category.selectors';
import { RequestState } from 'src/app/state/category/category.state';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit, OnDestroy {

  id: number;

  componentActive = true;

  form: FormGroup;
  loading$: Observable<boolean>;

  constructor(private store: Store<AppState>, private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {

    this.initializeForm();

    this.id = this.route.snapshot.params.id;
    this.loading$ = this.store.select(selectCategoryLoading);

    if (this.id) {
      this.store
        .pipe(
          takeWhile(() => this.componentActive),
          select(selectCategoryById(this.id)))
        .subscribe(category => {
          this.form.patchValue(category);
        });
    }


    this.store.pipe(
      takeWhile(() => this.componentActive),
      select(selectCategoryRequest),
      skip(1),
      filter(x => x == RequestState.success)
    ).subscribe(request => {
      this.router.navigate(["/categories"]);
    });


  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }

  save() {
    if (this.id)
      this.update();
    else
      this.create();
  }

  update() {
    if (this.form.valid) {
      this.store.dispatch(updateCategoryRequest({ category: this.form.value }));
    }
  }

  create() {
    if (this.form.valid) {
      this.store.dispatch(createCategoryRequest({ category: this.form.value }));
    }
  }


  initializeForm() {
    this.form = new FormGroup({
      id: new FormControl(0),
      name: new FormControl("", [Validators.required]),
      description: new FormControl(""),
    });
  }

}
