import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddorderComponent } from './addorder/addorder.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  { path: 'addorder', component: AddorderComponent },
  { path: 'orders', component: OrdersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
