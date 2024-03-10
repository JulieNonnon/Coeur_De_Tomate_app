import { Component, Input } from '@angular/core';
import { Product } from '../../mocks/product.model';

@Component({
  selector: 'app-product-details-card',
  templateUrl: './product-details-card.component.html',
  styleUrl: './product-details-card.component.css'
})
export class ProductDetailsCardComponent {
  @Input() product!: Product;


}
