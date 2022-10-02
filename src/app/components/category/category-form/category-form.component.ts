import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/categoy.service';
import { BaseFormComponent } from '../../base-form.component';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent extends BaseFormComponent<Category> {

  constructor(service: CategoryService, route: ActivatedRoute) {
    super(service, route);
  }

  initializeForm() {
    this.form = new FormGroup({
      id: new FormControl(0),
      name: new FormControl("", [Validators.required]),
      description: new FormControl(""),
    });
  }

}
