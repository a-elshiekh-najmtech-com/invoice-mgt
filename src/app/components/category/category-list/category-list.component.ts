import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category';
import { AppState } from 'src/app/state/app.state';
import { deleteCategoryRequest, loadCategoriesRequest } from 'src/app/state/category/category.actions';
import { selectCategories } from 'src/app/state/category/category.selectors';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  categories$: Observable<Category[]>;
  constructor(private store: Store<AppState>) {
    this.store.dispatch(loadCategoriesRequest());
  }

  ngOnInit(): void {
    this.categories$ = this.store.select(selectCategories);
  }

  delete(id) {
    if (confirm("Delete Category?")) {
      this.store.dispatch(deleteCategoryRequest({ id }));
    }
  }
}

