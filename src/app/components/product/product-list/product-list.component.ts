import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe(products => this.products = products);
  }

  delete(id) {
    if (confirm("Delete Product?")) {
      this.productService.delete(id).subscribe(() => {
        this.products = this.products.filter(x => x.id != id);
      });
    }
  }
}
