import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { CategoryService } from 'src/app/services/categoy.service';
import { AppState } from 'src/app/state/app.state';
import { createCategoryRequest } from 'src/app/state/category/category.actions';
import { selectCategoryById } from 'src/app/state/category/category.selectors';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {

  id: number;

  form: FormGroup;
  loading = false;
  constructor(private store: Store<AppState>, private service: CategoryService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.initializeForm();

    this.id = this.route.snapshot.params.id;

    if (this.id) {
      this.store.select(selectCategoryById(this.id)).subscribe(category => {
        this.form.patchValue(category);
      });
    }
  }

  save() {
    if (this.id)
      this.update();
    else
      this.create();
  }

  update() {
    if (this.form.valid && !this.loading) {
      this.loading = true;

      this.service.update(this.id, this.form.value).subscribe(
        () => {
          this.loading = false;
        },
        () => {
          this.loading = false;
        });
    }
  }

  create() {
    if (this.form.valid && !this.loading) {
      this.loading = true;
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
