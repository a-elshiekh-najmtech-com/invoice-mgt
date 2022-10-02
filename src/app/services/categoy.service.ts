import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { DataService } from './data.service';

@Injectable({ providedIn: 'root' })
export class CategoryService extends DataService<Category> {
    constructor(httpClient: HttpClient) {
        super(httpClient, "Categories")
    }
}