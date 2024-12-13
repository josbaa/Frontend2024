import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders: any[] = [];

  saveOrder(order: any) {
    this.orders.push(order);
    console.log('Tilauksen tiedot tallennettu palveluun:', this.orders);
  }

  getOrders() {
    return this.orders;
  }
}

