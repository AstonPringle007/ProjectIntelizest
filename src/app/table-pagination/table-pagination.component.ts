import { Component, OnInit, ViewChild } from '@angular/core';
import { HttptabledataService } from '../httptabledata.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.css']
})
export class TablePaginationComponent implements OnInit{
  displayedColumns: string[] = ['product', 'category', 'freshness', 'price', 'comment', 'date'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;  

  constructor(private httptabledataService:HttptabledataService) {
   }

  ngOnInit(){
    this.onGetProducts();
  }
  
  onGetProducts(){
    // console.log(this.httptabledataService.getProducts());
    // console.log('getting')
    this.httptabledataService.tabelEmit.subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
      console.log(res.data)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort
    })
  }
  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;  
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
