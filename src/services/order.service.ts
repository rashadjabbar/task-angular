import { Injectable } from '@angular/core';
import { Orders } from 'src/models/orders';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs-compat/Observable';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  apiLink: string = 'https://localhost:44388/api/orders';

  constructor(private http: HttpClient ) { }

  getOrders(): Observable<Orders[]> {
    let link: string = `${this.apiLink}`;
    return this.http.get<Orders[]>(link);
  }


  getOrdersByStat(id: number): Observable<Orders[]> {
    let link: string = `https://localhost:44388/api/orders/getByStat/${id}`;
    return this.http.get<Orders[]>(link);
  }

  getOrderById(id: number): Observable<Orders> {
    let link: string = `${this.apiLink}/${id}`;
    return this.http.get<Orders>(link);
  }

  addOrder(orders: Orders): Observable<Orders> {
    let link: string = `${this.apiLink}`;
    return this.http.post<Orders>(link, orders);
  }

  editOrder(order: Orders): Observable<Orders> {
    let link: string = `${this.apiLink}`;
    return this.http.put<Orders>(link , order);
  }

  removeOrder(id: number): Observable<Orders> {
    let link: string = `${this.apiLink}/${id}`;
    return this.http.delete<Orders>(link);
  }
}
