import { Pipe, PipeTransform } from '@angular/core';
import { Orders } from 'src/models/orders';
import { AlertifyService } from 'src/services/alertify.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  constructor(private alertify: AlertifyService) { }
  transform(orders: Orders[], searchText: string): Orders[] {


    searchText = searchText.toLowerCase();
    let search = orders.filter(function (data) {
      return JSON.stringify(data).toLowerCase().includes(searchText);
    });

    return search;

  }
}
