import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-orders',
  templateUrl: './profile-orders.component.html',
  styleUrls: ['./profile-orders.component.scss']
})
export class ProfileOrdersComponent implements OnInit {
  isMechanic: boolean;

  constructor() { 
    this.isMechanic = false;
  }

  ngOnInit() {
  }

}
