import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { DataService } from './data.service';

@Injectable({providedIn: 'root'})
export class ProductService extends DataService<Product> {
    constructor(httpClient: HttpClient) {
        super(httpClient, "Products")
    }
}