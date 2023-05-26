import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interface/products';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>('  http://localhost:3000/products')
  }

  deleteProduct(id: IProduct): Observable<IProduct[]>{
    return this.http.delete<IProduct[]>('http://localhost:3000/products/'+id)
  }

  addProduct(product: IProduct): Observable<IProduct[]>{
    return this.http.post<IProduct[]>('  http://localhost:3000/products', product)
  }
}
