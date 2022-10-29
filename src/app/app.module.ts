import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryFormComponent } from './components/category/category-form/category-form.component';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { InvoiceFormComponent } from './components/invoice/invoice-form/invoice-form.component';
import { ProductFormComponent } from './components/product/product-form/product-form.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { reducers } from './state/app.state';
import { EffectsModule } from '@ngrx/effects';
import { CategoriesEffects } from './state/category/category.effects';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    InvoiceFormComponent,
    CategoryListComponent,
    CategoryFormComponent,
    ProductListComponent,
    ProductFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({}),

    StoreModule.forFeature("State", reducers),

    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),

    EffectsModule.forRoot([
      CategoriesEffects
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
