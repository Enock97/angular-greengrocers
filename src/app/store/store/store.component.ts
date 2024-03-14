import { Component, OnInit, inject } from '@angular/core';
import { GroceriesService} from '../../service/groceries.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent implements OnInit {
  filteredItems: any;
  filterType: string = '';
  groceriesService = inject(GroceriesService);
  items = this.groceriesService.items;

  constructor() {}

  ngOnInit(): void {
    this.fetchItems();
  }

  async fetchItems(): Promise<void> {
    this.items = await this.groceriesService.getItems();
    this.filteredItems = [...this.items];
  }

  addToCart(item: Item): void {
    this.groceriesService.addToCart(item);
  }

  filterByType(type: string): void {
    this.filteredItems = this.items.filter((item: Item) => item.type === type);
  }

  sortByPrice(): void {
    this.filteredItems = [...this.items].sort((a, b) => a.price - b.price);
  }

  sortByName(): void {
    this.filteredItems = [...this.items].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }
}
