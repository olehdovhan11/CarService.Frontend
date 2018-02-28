import { Component } from '@angular/core';
import { BaseOrderInfo } from '../../models/base-order-info';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent {

  private orders: BaseOrderInfo[] = [];

  constructor() {
    for (var i = 0; i < 20; ++i) {
      this.orders.push(new BaseOrderInfo());
    }
  }

}
