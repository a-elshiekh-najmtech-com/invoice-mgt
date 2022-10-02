import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { InvoiceDetail } from 'src/app/models/invoice';
import { CategoryService } from 'src/app/services/categoy.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss']
})
export class InvoiceFormComponent implements OnInit {

  categories: Category[];
  products: Product[];

  form: FormGroup;


  constructor(private categoryService: CategoryService, private productService: ProductService) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(categories => this.categories = categories);
    this.productService.getAll().subscribe(products => this.products = products);

    this.form = new FormGroup({
      id: new FormControl(),
      notes: new FormControl(),
      invoiceDate: new FormControl(),
      customerName: new FormControl(),
      categoryId: new FormControl(),
      invoiceDetails: new FormArray([], [Validators.required]),
    });

    this.addInvoiceLine();
  }

  get invoiceDetailsControl() {
    return this.form.get("invoiceDetails") as FormArray
  }

  addInvoiceLine() {
    let group = new FormGroup({
      id: new FormControl(),
      productId: new FormControl(),
      price: new FormControl(),
      qty: new FormControl()
    });

    group.get("productId").valueChanges.subscribe(x => {
      let product = this.products.find(y => y.id == x);
      group.get("price").setValue(product?.price ?? 0 );
    })

    this.invoiceDetailsControl.push(group);
  }

  removeAt(index) {
    this.invoiceDetailsControl.removeAt(index);
  }

  getLineTotalPrice(line: InvoiceDetail) {
    return line.price * line.qty;
  }

  getLinePrice(line: InvoiceDetail) {
    return line.price;
  }

  invoiceTotal() {
    let details: InvoiceDetail[] = this.invoiceDetailsControl.value;

    return details.map(x => x.price * x.qty).reduce((a, b) => a + b, 0);
  }

}
