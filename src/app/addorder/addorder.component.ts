import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-addorder',
  templateUrl: './addorder.component.html',
  styleUrls: ['./addorder.component.css']
})
export class AddorderComponent implements OnInit {

  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: '',
      quantities: this.fb.array([]),
    });
  }


  ngOnInit() {
  }


  upload(event: Event) {
    var filename: any = $(".chooseFile").val();
    if (/^\s*$/.test(filename)) {
      $(".file-upload").removeClass('active');
      $(".noFile").text("Seçilmiş fayl yoxdur...");
    }
    else {
      $(".file-upload").addClass('active');
      $(".noFile").text(filename.replace("C:\\fakepath\\", ""));
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






