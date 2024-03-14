import { Component, OnInit, inject } from '@angular/core';
import { GroceriesService } from '../../service/groceries.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css'],
})
export class TotalComponent implements OnInit {
  totalPrice: number = 0;
  groceriesService = inject(GroceriesService);

  constructor() {}

  ngOnInit(): void {
    this.getTotalPrice();
  }

  getTotalPrice(): number {
    return this.groceriesService.cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }
}
