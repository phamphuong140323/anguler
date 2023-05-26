import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from 'src/app/interface/products';
@Component({
  selector: 'tr[app-product-item]',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
    @Input() product : any
    @Input() index : any 
    @Output() onRemove: EventEmitter<IProduct> = new EventEmitter()

    removeItem(id :IProduct){
      this.onRemove.emit(id)
    }
}
