import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString:string): any {
    if( filterString === ''){
      return value;
    }
   
    const users = [];
    for(let user of value){
      console.log(user.id)
      if(user.id == filterString){
        users.push(user);
      }
    }
    return users;
  }

}
