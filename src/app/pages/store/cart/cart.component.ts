import { Component } from '@angular/core';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: CartItem[] = [
    { id: 1, name: 'Retro Comic #1', price: 9.99, quantity: 2 },
    { id: 2, name: 'Vintage Poster', price: 14.99, quantity: 1 },
  ];

  get total() {
    return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  increaseQty(item: CartItem) {
    item.quantity++;
  }

  decreaseQty(item: CartItem) {
    if (item.quantity > 1) item.quantity--;
  }

  removeItem(item: CartItem) {
    this.cartItems = this.cartItems.filter(ci => ci.id !== item.id);
  }

  clearCart() {
    this.cartItems = [];
  }
}
