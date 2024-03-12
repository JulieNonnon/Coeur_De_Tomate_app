import { Component, Input } from '@angular/core';
import { Product } from '../../mocks/product.model';

@Component({
  selector: 'app-product-details-card',
  templateUrl: './product-details-card.component.html',
  styleUrl: './product-details-card.component.css'
})
export class ProductDetailsCardComponent {
  
  @Input() product!: Product;

  productQuantity : number = 1;
  totalPrice: number = 0;
  
  updateQuantity(quantity: number) {
    this.productQuantity = quantity;
    this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    this.totalPrice = this.product.price * this.productQuantity;
  }



}
