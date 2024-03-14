import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart/cart.component';
import { StoreComponent } from './store/store/store.component';
import { TotalComponent } from './total/total/total.component';
import { GroceriesModule } from './module/groceries/groceries.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GroceriesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
