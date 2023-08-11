import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { ArticleComponent, DialogData } from '../article/article.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MainService } from '../main.service';

@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.component.html',
  styleUrls: ['./dialog-overview-example-dialog.component.css'],
})
export class DialogOverviewExampleDialogComponent  {
  phoneForm: FormGroup;
  currentIndex:number;
  phoneValue:any; 
  constructor(private mainService:MainService, private formBuilder:FormBuilder,
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,){
    this.mainService.phoneEmit.subscribe(res => {
      // console.log(res);
      this.currentIndex = res;
    })
  }


  ngOnInit(){
    this.phoneForm = this.formBuilder.group({
      phonenumber: ['', [Validators.required, Validators.pattern(/^[789]\d{9}$/)]],
      occupation: ['', [Validators.required]],
    })
  }
  // value(event:any){
  //   if(event.length === 10){

  //     let regex = /^[789]\d{9}$/;
  //   }
    

  // }
  
  onSubmitPhone(){
    let dataBoolean = false
    if(this.phoneForm.value.phonenumber.length > 8){
      dataBoolean = true;
    }
    this.phoneValue = {
      id: this.data , 
      ph: this.phoneForm.value.phonenumber, 
      db:dataBoolean, 
      occu: this.phoneForm.value.occupation
    };
    let currIndex = this.currentIndex
    // this.mainService.getCurrentPhoneNo(currIndex, phoneValue);
    // console.log(currIndex);
    this.onNoClick()
  }
  onNoClick(): void {
    this.dialogRef.close(this.phoneValue);
  }
  getErrorMessage() {
    if (this.phoneForm.invalid) {
      if(this.phoneForm.value.phonenumber === '' || this.phoneForm.value.phonenumber.length === 0){
        return 'Enter a value';
      }
      if(this.phoneForm.value.phonenumber.length !== 10 ){
        return 'Length should be 10';
      }
      return 'enter valid Phone number'
    }

    return this.phoneForm.hasError('email') ? 'Not a valid email' : '';
  }

}
