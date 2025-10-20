import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-box',
  standalone: false,
  templateUrl: './product-box.component.html',
  styleUrl: './product-box.component.css'
})
export class ProductBoxComponent {
  @Input() productImage?: string = '';        // product image URL
  @Input() productTitle?: string = 'Product'; // title
  @Input() productPrice?: string = '';        // price text
  @Input() productDescription?: string = '';  // description
  @Input() badgeText?: string = '';           // optional badge like NEW, SALE

  imageError = false;

  onImageError(event: Event) {
    this.imageError = true;
  }
}
