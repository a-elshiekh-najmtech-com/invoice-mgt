import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/categoy.service';
import { AppState } from 'src/app/state/app.state';
import { loadCategories } from 'src/app/state/category/category.actions';
import { selectCategories } from 'src/app/state/category/category.selectors';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  categories$: Observable<Category[]>;
  constructor(private categoryService: CategoryService, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(categories => {
      this.store.dispatch(loadCategories({ categories }));
    });


    this.categories$ = this.store.select(selectCategories);
  }

  delete(id) {
    // if (confirm("Delete Category?")) {
    //   this.categoryService.delete(id).subscribe(() => {
    //     this.categories = this.categories.filter(x => x.id != id);
    //   });
    // }
  }
}

