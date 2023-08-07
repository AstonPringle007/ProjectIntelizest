
import { Injectable, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  uservalue = 'sdsd'
  @Input() eventEmits = new Subject<any>();
  phoneEmit = new Subject<any>();

  constructor() { }

  getUserName(name:string){
    this.uservalue = name;
  }
  displayTableData(currentUser:any){
    this.eventEmits.next(currentUser);
  }

  getIndex(index:number){
    this.phoneEmit.next(index);
  }
  getCurrentPhoneNo(index:number, phoneNo:any){
    let userPhone = {index, phoneNo};
    // console.log(index, phoneNo)
    this.phoneEmit.next(userPhone);
  }
}
