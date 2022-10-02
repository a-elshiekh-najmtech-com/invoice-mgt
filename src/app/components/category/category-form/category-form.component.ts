import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/categoy.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {

  id: number;

  form: FormGroup;
  loading = false;
  constructor(private service: CategoryService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(0),
      name: new FormControl("", [Validators.required]),
      description: new FormControl(""),
    });

    this.id = this.route.snapshot.params.id;

    if (this.id) {
      this.service.get(this.id).subscribe(category => {
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

      this.service.create(this.form.value).subscribe(
        () => {
          this.loading = false;
        },
        () => {
          this.loading = false;
        });
    }
  }

}
