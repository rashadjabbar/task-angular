import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as $ from "jquery";
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { AlertifyService } from 'src/services/alertify.service';
import { Orders } from 'src/models/orders';
import { Documents } from 'src/models/documents';
import { OrderService } from 'src/services/order.service';
import { Router } from '@angular/router';
import { DocsServiceService } from 'src/services/docsService.service';

@Component({
  selector: 'app-addorder',
  templateUrl: './addorder.component.html',
  styleUrls: ['./addorder.component.css']
})
export class AddorderComponent implements OnInit {

  productForm: FormGroup;

  newOrders: Orders = new Orders();

  docs: Documents[] = [];

  constructor(private fb: FormBuilder,
    private alertify: AlertifyService,
    private orderService: OrderService,
    private docsService: DocsServiceService,
    private router: Router,
    ) {
    this.productForm = this.fb.group({
      name: '',
      quantities: this.fb.array([]),
    });
    
  }

  ngOnInit() {
    this.docsService.getDocs().subscribe((doc: Documents[]) => {
      return (this.docs = doc);
    });
  }

  // editForm = new FormGroup({
  //   orderDocNum: new FormControl('' , [Validators.required]),
  //   orderPrice: new FormControl('' , [Validators.required]),
  //   orderCusName: new FormControl('' , [Validators.required]),
  //   orderDate: new FormControl('' , [Validators.required]),
  //   orderGbnum: new FormControl('' , [Validators.required]),
  //   orderTrafficType: new FormControl('' , [Validators.required]),
  //   orderDocId: new FormControl('' , [Validators.required]),
  //   orderFile: new FormControl('' , [Validators.required]),
  // })
  

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


  valueInput!: string;

  addOrder(){


    this.orderService.addOrder(this.newOrders).subscribe((success: any) => {
      this.alertify.succes("Sifariş uğurla əlavə olundu");
      this.router.navigate(['/orders']);
    },
    (error: any) =>{
      this.alertify.error("Sifarişi yaratmaq mümkün olmadı");
      this.router.navigate(['/orders/addorder']);
    });
  }


}






