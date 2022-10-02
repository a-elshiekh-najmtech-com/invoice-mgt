import { Category } from "./category";
import { Product } from "./product";

export interface Invoice {
    id: number;
    notes: string;
    invoiceDate: Date;
    customerName: string;
    categoryId: number;
    category: Category;
    invoiceDetails: InvoiceDetail[];
    netAmount: number;
}

export interface InvoiceDetail {
    id: number;
    productId: number;
    price: number;
    qty: number;
    discount: number;
    invoiceId: number;
    product: Product;
    netAmount: number;
}