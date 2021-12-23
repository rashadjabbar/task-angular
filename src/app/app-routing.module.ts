import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddorderComponent } from './addorder/addorder.component';
import { OrdersComponent } from './orders/orders.component';
import { AppComponent } from './app.component';
import { EditorderComponent } from './editorder/editorder.component';
import { OrderDetailsComponent } from './orderDetails/orderDetails.component';

const routes: Routes = [
  { path: 'app', component: AppComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'orders/addorder', component: AddorderComponent },
  { path: 'orders/editorder/:orderID', component: EditorderComponent },
  { path: 'orders/orderDetails/:orderID', component:  OrderDetailsComponent},
  { path: '', redirectTo: 'orders',  pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
