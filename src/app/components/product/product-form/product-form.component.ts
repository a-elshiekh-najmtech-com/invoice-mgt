import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { AppState } from 'src/app/state/app.state';
import { loadCategoriesRequest } from 'src/app/state/category/category.actions';
import { selectCategories, selectCategoryLoading, selectCategoryTotal } from 'src/app/state/category/category.selectors';
import { BaseFormComponent } from '../../base-form.component';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent extends BaseFormComponent<Product> {



  categories$: Observable<Category[]>;
  categoriesLoading$: Observable<boolean>;

  constructor(private store: Store<AppState>, service: ProductService, route: ActivatedRoute) {
    super(service, route);
  }

  initializeForm() {
    this.form = new FormGroup({
      id: new FormControl(0),
      name: new FormControl("", [Validators.required]),
      price: new FormControl(0, [Validators.required, Validators.min(1)]),
      categoryId: new FormControl(null, [Validators.required]),
      description: new FormControl(""),
    });

    this.store.pipe(take(1), select(selectCategoryTotal)).subscribe(total => {
      if (total == 0)
        this.store.dispatch(loadCategoriesRequest());
    });

    this.categories$ = this.store.select(selectCategories);
    this.categoriesLoading$ = this.store.select(selectCategoryLoading);
    

  }

}
