import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, firstValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from '../models/item';
/*
export interface CartItem extends Item {
  quantity: number;
} */

@Injectable({
  providedIn: 'root',
})
export class GroceriesService {
  private itemsUrl = 'https://boolean-api-server.fly.dev/groceries';
  http = inject(HttpClient);
  items: Item[] = [];
  cart: Item[] = [];

  constructor() {}

  async getItems(): Promise<Item[]> {
    this.items = await firstValueFrom(this.http.get<Item[]>(this.itemsUrl));
    return this.items;
  }

  getCartItems(): Item[] {
    return this.cart;
  }

  addToCart(itemToAdd: Item): void {
    const itemIndex = this.cart.findIndex((item) => item.id === itemToAdd.id);
    if (itemIndex !== -1) {
      // Item is found in the cart, increase its quantity
      this.cart[itemIndex].quantity += 1;
    } else {
      // Item not found, add to cart with a quantity of 1
      this.cart.push({ ...itemToAdd, quantity: 1 });
    }
  }

  // Method to update the quantity of an item in the cart
  updateItemQuantity(itemId: string, change: number): void {
    const itemIndex = this.cart.findIndex((item) => item.id === itemId);
    if (itemIndex !== -1) {
      this.cart[itemIndex].quantity += change;
      if (this.cart[itemIndex].quantity <= 0) {
        // If the quantity becomes 0 or less, remove the item from the cart
        this.cart.splice(itemIndex, 1);
      }
    }
  }

}
