import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttptabledataService } from '../httptabledata.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.css']
})
export class MatTableComponent  {
  freshnessList = ['Brand new', 'Medium', 'Damaged'];
  productForm:FormGroup;
  notifyAdd = 0;

  constructor(
    private formBuilder:FormBuilder, 
    private httptabledataService:HttptabledataService,
    private dialogRef:MatDialogRef<MatTableComponent>) { }

  ngOnInit(){
    this.productForm = this.formBuilder.group({
      product: ['', Validators.required],
      category: ['', Validators.required],
      freshness: ['', Validators.required],
      price: ['', Validators.required],
      comment: ['', Validators.required],
      date: ['', Validators.required]
    })
    
  }
  onAddProducts(){
    if(this.productForm.valid){
      this.httptabledataService.createTable(this.productForm.value);
      this.dialogRef.close();
    }
  }
  onIncrement(){
    this.httptabledataService.addNotifyMain(this.notifyAdd + 1)
  }

}
