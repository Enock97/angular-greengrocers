import { Component, OnInit, inject } from '@angular/core';
import { GroceriesService } from '../../service/groceries.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: Item[] = [];
  groceriesService = inject(GroceriesService);

  constructor() {}

  ngOnInit(): void {
  this.cartItems = this.groceriesService.getCartItems();
  }

  updateQuantity(item: Item, change: number): void {
    this.groceriesService.updateItemQuantity(item.id, change);
  }
}
