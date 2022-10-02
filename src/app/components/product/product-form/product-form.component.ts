import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { CategoryService } from 'src/app/services/categoy.service';
import { ProductService } from 'src/app/services/product.service';
import { BaseFormComponent } from '../../base-form.component';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent extends BaseFormComponent<Product> {



  categories: Category[];

  constructor(service: ProductService, private categoryService: CategoryService, route: ActivatedRoute) {
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

    this.categoryService.getAll().subscribe(categories => this.categories = categories);

  }

}
