import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { NgxCleaveDirectiveModule } from 'ngx-cleave-directive';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { AddorderComponent } from './addorder/addorder.component';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
      SidebarComponent,
      HeaderComponent,
      AddorderComponent,
      OrdersComponent
   ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NgxCleaveDirectiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}