import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttptabledataService {
  tabelEmit = new EventEmitter<any>();
  notifyEmit = new EventEmitter<any>();

  tableDatas = [];
  // notifyArray = [];
 

  constructor() {
 
   }

  createTable(tableData:any){
    this.tableDatas.push(tableData);
    this.tabelEmit.emit(this.tableDatas);
  }

  getProducts(){
    return this.tableDatas;
  }
  
  addNotifyMain(notify:number){
    // this.notifyArray.push(notify);
    this.notifyEmit.emit(notify);
  }
}

// productDetails:any = [
//   {
//     product: "Apple",
//     category: "Fruits",
//     freshness: "Fresh",
//     price: 0.75,
//     comment: "Sweet and crunchy",
//     date: "2023-08-04"
//   },
//   {
//     product: "Milk",
//     category: "Dairy",
//     freshness: "Fresh",
//     price: 2.99,
//     comment: "Whole milk",
//     date: "2023-08-04"
//   },
//   {
//     product: "Bread",
//     category: "Bakery",
//     freshness: "Fresh",
//     price: 1.49,
//     comment: "Whole grain",
//     date: "2023-08-03"
//   },
//   {
//     product: "Chicken",
//     category: "Meat",
//     freshness: "Frozen",
//     price: 5.99,
//     comment: "Boneless, skinless",
//     date: "2023-08-02"
//   },
//   {
//     product: "Lettuce",
//     category: "Vegetables",
//     freshness: "Fresh",
//     price: 1.29,
//     comment: "Crisp and green",
//     date: "2023-08-04"
//   },
//   {
//     product: "Cereal",
//     category: "Breakfast",
//     freshness: "Packaged",
//     price: 3.49,
//     comment: "Whole grain flakes",
//     date: "2023-08-03"
//   }
// ];