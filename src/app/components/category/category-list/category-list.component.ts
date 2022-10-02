import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/categoy.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  categories: Category[];
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(categories => this.categories = categories);
  }

  delete(id) {
    if (confirm("Delete Category?")) {
      this.categoryService.delete(id).subscribe(() => {
        this.categories = this.categories.filter(x => x.id != id);
      });
    }
  }
}

