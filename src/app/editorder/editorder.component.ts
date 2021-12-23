import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, NgForm } from '@angular/forms';
import { AlertifyService } from 'src/services/alertify.service';
import { Orders } from 'src/models/orders';
import { Documents } from 'src/models/documents';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/services/order.service';
import { DocsServiceService } from 'src/services/docsService.service';


@Component({
  selector: 'app-editorder',
  templateUrl: './editorder.component.html',
  styleUrls: ['./editorder.component.css']
})
export class EditorderComponent implements OnInit {

  productForm: FormGroup;

  priceDef: boolean = false;


  constructor(private fb: FormBuilder,
    private alertify: AlertifyService,
    private orderServices: OrderService,
    private route: ActivatedRoute,
    private docsService: DocsServiceService,
    private router: Router
  ) {

    this.productForm = this.fb.group({
      name: '',
      quantities: this.fb.array([]),
    });
  }


  editOrder: Orders = new Orders();

  docs: Documents[] = [];


  ngOnInit() {
    this.route.params.subscribe(param => {
      let orderId: number = param["orderID"];
      this.orderServices.getOrderById(orderId).subscribe(d => {
        this.editOrder = d;
      })
    });
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

  quantities(): FormArray {
    return this.productForm.get("quantities") as FormArray
  }

  newQuantity(): FormGroup {
    return this.fb.group({
      qty: '',
      price: '',
    })
  }

  addQuantity() {
    this.quantities().push(this.newQuantity());
  }

  removeQuantity(i: number) {
    this.quantities().removeAt(i);
  }


}
