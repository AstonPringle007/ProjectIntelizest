import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {MatSnackBar, MatSnackBarRef, MatSnackBarModule} from '@angular/material/snack-bar';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { DefaultService } from 'src/app/layouts/default/default.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  views = ['View only to me', 'View to all'];
  displayResults:boolean = false;
  enable:boolean = true;
  durationInSeconds = 5;
  name = ''; Password = ''
  value = '';

  postForm:FormGroup;
  @ViewChild('signUpForm') signUpForm:NgForm;
  @ViewChild('password') passwordRef:NgForm;
  templateSpan: boolean = false;
  hide = true;//mat
  selectedFileType = 'image';
  modifiedText:string;
  anySpecialCase:boolean = false;

  constructor(private _snackBar: MatSnackBar, private formBuilder:FormBuilder,private defaultService:DefaultService){}

  ngOnInit() {
    this.postForm = this.formBuilder.group({
      name: [''],
      password: ['', [Validators.required]],
      viewToMe: ['', [Validators.required]],
      viewAll: [''],
    })
  }  
  onCreatePosts(){
     this.displayResults = true;
     this.name = this.postForm.value.name;
     this.Password = this.postForm.value.password;
     //Sending to Service
  }

  onEnableAuthorize(input:string){
    if(input === 'disable'){
      console.log(input)
      this.enable = true;
      //Disabling the name and password
      this.postForm.get('name').disable();
      this.postForm.get('password').disable();
      console.log(this.enable)
      this.openSnackBar();
      
    }
    if(input === 'enable'){
      this.enable = false;
     //Enabling the name and password
      this.postForm.get('name').enable();
      this.postForm.get('password').enable();
    }
  }
  openSnackBar() {
    this._snackBar.openFromComponent(PopUpComponent, {
      duration: this.durationInSeconds * 1000,
    });
  } 
  onAddUser(){
     console.log(this.signUpForm.value);
     if(this.signUpForm.value.fileType === ''){
       this.templateSpan = true
     }

  }
  onFileSelected(event){
     console.log(event)
     this.selectedFileType = event;
  }

  getPasswordSpecialCase(event){
    const nameRegexp = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if(event.target.value.length > 8){
      this.anySpecialCase = !nameRegexp.test(event.target.value);
    }
    
    console.log('afduhduiah')
  }

}
