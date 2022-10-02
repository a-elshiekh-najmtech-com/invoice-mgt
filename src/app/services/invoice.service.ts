import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice';
import { DataService } from './data.service';

@Injectable({providedIn: 'root'})

export class InvoiceService extends DataService<Invoice> {
    constructor(httpClient: HttpClient) {
        super(httpClient, "Invoices")
    }
}