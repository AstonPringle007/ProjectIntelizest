import { Component, OnInit } from '@angular/core';
import { HttptabledataService } from 'src/app/httptabledata.service';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  name = 'Aston';
  email = 'aston@gmail.com'
  notification = null;
  hidden = false;
  notifyArray = [];

  constructor(private mainService: MainService, private httptabledataService: HttptabledataService) { }

  ngOnInit() {
    this.mainService.getUserName(this.name);
    this.httptabledataService.notifyEmit.subscribe(notifyCount => {
      this.notifyArray.push(notifyCount);
      console.log(notifyCount)
        this.notification = this.notifyArray.length;
    })
  }

  toggleBadgeVisibility() {
    this.notification = null;
    this.notifyArray = [];
  }
}
