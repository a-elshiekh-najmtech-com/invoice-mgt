import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryFormComponent } from './components/category/category-form/category-form.component';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { HomeComponent } from './components/home/home.component';
import { InvoiceFormComponent } from './components/invoice/invoice-form/invoice-form.component';
import { ProductFormComponent } from './components/product/product-form/product-form.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';

const routes: Routes = [
  { path: 'invoice/add', component: InvoiceFormComponent },
  { path: 'categories', component: CategoryListComponent },
  { path: 'categories/add', component: CategoryFormComponent },
  { path: 'categories/:id', component: CategoryFormComponent },

  { path: 'products', component: ProductListComponent },
  { path: 'products/add', component: ProductFormComponent },
  { path: 'products/:id', component: ProductFormComponent },

  { path: '', pathMatch: "full", component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
