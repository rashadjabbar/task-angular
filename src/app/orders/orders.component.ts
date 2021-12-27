import { Component, OnInit } from '@angular/core';
import { Orders } from 'src/models/orders';
import { OrderService } from 'src/services/order.service';
import { AlertifyService } from 'src/services/alertify.service';
import { MatDialog } from '@angular/material/dialog';
import { AddorderComponent } from '../addorder/addorder.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  p: number = 1;

  orders: Orders[] = [];

  searchText: string = '';

  totalCount: any;

  popoverTitle = 'Təsdiq formu';
  popoverMessage = 'Bu sətri silmək istədiyinizdən əminsiniz?';
  confirmClicked = false;
  cancelClicked = false;

  constructor(private orderService: OrderService,
    private alertify: AlertifyService,) { }

  ngOnInit() {

    this.orderService.getOrders().subscribe((data: Orders[]) => {
      return (this.orders = data);
    });

    this.orderService.getOrders().subscribe((data: Orders[]) => {
      this.totalCount = data.length
    });

  }

  statChange(id: string) {
    if (parseInt(id) == 1 ||parseInt(id) == 0) {
      this.orderService.getOrdersByStat(parseInt(id)).subscribe((data: Orders[]) => {
        return (this.orders = data);
      });
        
      this.orderService.getOrdersByStat(parseInt(id)).subscribe((x: string | any[]) => {
        this.totalCount = x.length;
      })
    }
    else
    this.orderService.getOrders().subscribe((data: Orders[]) => {
      return (this.orders = data);
    });

    this.orderService.getOrders().subscribe((x: string | any[]) => {
      this.totalCount = x.length;
    })
  }

  removecol(id: number): void {
    this.orderService.removeOrder(id).subscribe((success: any) => {
      this.alertify.succes("Sifariş uğurla silindi");
      this.ngOnInit();
    },
      (error: any) => {
        this.alertify.error("Sifarişi silmək mümkün olmadı");
      });


  }

}
