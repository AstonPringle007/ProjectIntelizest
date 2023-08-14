import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatTableComponent } from 'src/app/mat-table/mat-table.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideBarForMe:EventEmitter<any> = new EventEmitter();

  constructor(private dialog:MatDialog, private router:Router) {}

  ngOnInit(){
  }
  toggleSideBar(){
    this.toggleSideBarForMe.emit();
  }
  openDialog(){
    this.dialog.open(MatTableComponent, {
      width: '30%'
    })
  }
  onSignOut(){
    this.router.navigate(['/'])
  }

}
