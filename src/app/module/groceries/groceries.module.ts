import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from 'src/app/cart/cart/cart.component';
import { StoreComponent } from 'src/app/store/store/store.component';
import { TotalComponent } from 'src/app/total/total/total.component';



@NgModule({
  declarations: [CartComponent, StoreComponent, TotalComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [CartComponent, StoreComponent, TotalComponent],
})
export class GroceriesModule {}
