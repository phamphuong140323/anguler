import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/interface/products';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: IProduct[] = [
  ]
  productName = ""

  constructor(private productServrics : ProductService){
    this.productServrics.getProducts().subscribe(data => {
      this.products = data
    })
  }

  removeItem(id: any){
    this.productServrics.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter(item => item.id !== id)
    })
  }
}
