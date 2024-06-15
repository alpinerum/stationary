import { Injectable } from '@angular/core';
import { products } from '../shared/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(){
    return products;
  }
}
