import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../services/data.service";

@Component({
    template: ''
})
export abstract class BaseFormComponent<T> implements OnInit {

    id: number;

    form: FormGroup;
    loading = false;
    constructor(protected service: DataService<T>, protected route: ActivatedRoute) { }

    ngOnInit(): void {

        this.initializeForm();

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

    abstract initializeForm()
}
