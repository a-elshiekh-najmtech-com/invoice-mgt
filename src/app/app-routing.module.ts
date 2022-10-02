import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryFormComponent } from './components/category/category-form/category-form.component';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { InvoiceFormComponent } from './components/invoice/invoice-form/invoice-form.component';

const routes: Routes = [
  { path: 'invoice/add', component: InvoiceFormComponent },
  { path: 'categories', component: CategoryListComponent },
  { path: 'categories/add', component: CategoryFormComponent },
  { path: 'categories/:id', component: CategoryFormComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
