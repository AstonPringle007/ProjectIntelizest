import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

//Promises and Async
  async createPosts(data:any){
    return this.http.post('https://reqres.in/api/users', data, {
      observe: 'response'
    }).toPromise();
  }
//Normal Angular  
  getPosts(){
    return this.http.get('https://reqres.in/api/users?page=1');
  }
  deletePosts(index:number){
    console.log(index)
    return this.http.delete(`https://reqres.in/api/users/${index}`);
  }
  updatePosts(id, currentUser,){
    return this.http.put(`https://reqres.in/api/users/${id}`, currentUser);
  }
}
