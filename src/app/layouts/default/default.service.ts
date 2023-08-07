import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DefaultService {
  eventEmit:EventEmitter<any> = new EventEmitter<any>();

  constructor() { }
 
  getUsername(username){

  }
}
