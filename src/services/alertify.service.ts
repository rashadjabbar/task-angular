import { Injectable } from '@angular/core';

declare let alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  succes(msg: string): void {
    alertify.success(msg);
  }

  error(msg: string): void {
    alertify.error(msg);
  }

  warning(msg: string): void {
    alertify.warning(msg);
  }

  message(msg: string): void {
    alertify.message(msg);
  }

  confirm(msg: string): void {
    
  }

}
