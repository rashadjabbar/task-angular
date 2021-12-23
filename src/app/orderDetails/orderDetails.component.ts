import { Component, OnInit } from '@angular/core';
import { Orders } from 'src/models/orders';
import { AlertifyService } from 'src/services/alertify.service';
import { OrderService } from 'src/services/order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DocsServiceService } from 'src/services/docsService.service';
import { Documents } from 'src/models/documents';

@Component({
  selector: 'app-orderDetails',
  templateUrl: './orderDetails.component.html',
  styleUrls: ['./orderDetails.component.css']
})
export class OrderDetailsComponent implements OnInit {

  constructor(
    private alertify: AlertifyService,
    private orderServices: OrderService,
    private route: ActivatedRoute,
    private router: Router,
    private docsService: DocsServiceService
  ) { }


  priceDef: boolean = false;

  editOrder: Orders = new Orders();

  docs: Documents[] = [];


  ngOnInit() {

    this.route.params.subscribe(param => {
      let orderId: number = param["orderID"];
      this.orderServices.getOrderById(orderId).subscribe(d => {
        this.editOrder = d;
      })
    })

    this.docsService.getDocs().subscribe((doc: Documents[]) => {
      return (this.docs = doc);
    });
  }

  edit() {
    this.orderServices.editOrder(this.editOrder).subscribe(success => {
      this.alertify.succes("Uğurla düzəliş edildi");
      this.router.navigate(['/orders']);
    },
      error => {
        this.alertify.error("Düzəliş edilə bilmdi")
      })
  }

  upload(event: Event) {
    var filename: any = $(".chooseFile").val();
    if (/^\s*$/.test(filename)) {
      $(".file-upload").removeClass('active');
      $(".noFile").text("Seçilmiş fayl yoxdur...");
      this.alertify.error("Fayl yükləmə uğursuz oldu");

    }
    else {
      $(".file-upload").addClass('active');
      $(".noFile").text(filename.replace("C:\\fakepath\\", ""));
      this.alertify.succes("Fayl uğurla əlavə olundu");
    }
  }


}
