import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MainService } from '../main.service';
import { HttpService } from '../http.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { PopUpComponent } from '../modules/pop-up/pop-up.component';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogOverviewExampleDialogComponent } from '../dialog-overview-example-dialog/dialog-overview-example-dialog.component';

  //Mat
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articleForm:FormGroup;
  text: string;
  postUsername = '';
  error = null;
  users = [];
  filterString = '';
  editMode = false;
  currentUserId:number;
  currentUser:any;
  //Mat dialog
  row:any;
  phonenumber?:any;

  constructor(
    private formBuilder:FormBuilder, 
    private mainService:MainService,
    private httpService:HttpService,
    private _snackBar: MatSnackBar,
    private router:Router,
    public dialog: MatDialog,) { 
      this.mainService.phoneEmit.subscribe(res => {
        console.log(res)
      })
    }

  ngOnInit() {
    this.articleForm = this.formBuilder.group({
      name: [''],
      password: ['', [Validators.required]],
      email: ['', [Validators.required]],
      job: ['', [Validators.required]],
      phonenumber: ['', [Validators.required]]
    })
    this.postUsername = this.mainService.uservalue;
    this.onFetchPosts();
  } 

  onCreatePosts(){
    const name1 = this.articleForm.value.name;
    const job1 = this.articleForm.value.job;
    const userData = {name1, job1};
    if(!this.editMode){
      this.httpService.createPosts(userData).subscribe((res)=>{
        if(res.status === 201){
          console.log(res)
          this.openSnackBar('User Created Successfully', 'X')
        }else{
          this.openSnackBar('show please provide correct id.', 'X')
        }
      });
      if(this.articleForm.value.phonenumber.length !== 0 || this.articleForm.value.phonenumber === ''){
         this.router.navigate(['/tables'])
      }
      this.articleForm.reset();
    }else{
      this.httpService.updatePosts(this.currentUserId, userData).subscribe(res => {
        console.log(res)
      })
      this.editMode = false;
      
    }
  }
  onFetchPosts(){
    this.httpService.getPosts().subscribe(response => {
      this.users = response['data']
      console.log(response['data']);
    }, error => {
      console.log(error.message)
    })
  }
  onDeletePosts(id:number){
    console.log(id)
    this.httpService.deletePosts(id).subscribe(res => {
      this.users.splice(id, 1);
    }) 
  }
  onEditClicked(id:number){
    console.log(id)
    this.editMode = true;
    this.currentUserId  = id;
    this.currentUser = this.users.find((p) => {
      return p.id === id; 
    })
    this.articleForm.patchValue({
      name: this.currentUser.first_name + this.currentUser.last_name,
      email: this.currentUser.email,
      job: 'Developer'
    })
    //Route to Table Component and Display Data
    this.mainService.displayTableData(this.currentUser);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  //Mat
  openDialog(id:number){
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '350px',
      data: id
    })
    dialogRef.afterClosed().subscribe(result => {
      // const phoneValues = [];
      // phoneValues.push(result)
      this.phonenumber = result;
      this.users.forEach((val, i) => {
        // if(val.id === phoneValues[0].id) {
        //   val.phNo = phoneValues[0].ph;
        // }
        if(val.id === this.phonenumber.id){
           val.phNo = this.phonenumber.ph
        }
      })
      console.log(result);
    });
    this.mainService.getIndex(id);
  }



  onSearching(){
    this.filterString = 'dwfwf'
  }
}
