import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: any[] = [];

  constructor() { 

    //GETS THE CART DATAS FROM LOCALSTORAGE WHEN THE SERVICE IS INITIALIZED
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      this.cartItems = JSON.parse(storedCartItems);
    }
  }

  getCartItems(): any[] {
    return this.cartItems;
  }

  //ADD TO CART.
  //if that product already exists, its quantity increases.
  addToCart(product: any): void {
    const existingItem = this.cartItems.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({...product, quantity:1}) //spread operator
    }
    this.updateCart();
  }

  //MODIFY A PRODUCT QUANTITY IN CART
  updateQuantity(productId: number, newQuantity: number): void {
    const item = this.cartItems.find(item => item.id === productId);
    this.updateCart();
  }

  //REMOVE A PRODUCT FROM CART
  removeItem(productId: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
    this.updateCart();
  }

  //EMPTY THE CART
  clearCart(): void {
    this.cartItems = [];
    this.updateCart();
  }

  //UPDATE QUANTITY OF PRODUCT IN CART
  private updateCart(): void {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

}
