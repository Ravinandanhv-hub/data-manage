import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AppService {
  i:number=1;
  arr=[];
  // private url='http://localhost:3000/api/users';
  private url='https://data-manage-8zmb.onrender.com/api/users';

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get(this.url)
  }

  getUser(userId:any){
    return this.http.get(this.url+'/'+userId);
  }

  // getVeh(){
  //   return this.http.get('http://localhost:3001/Vehicles')
  // }

  post(user:any){
    return this.http.post(this.url, user);
  }

  del(ids:any){
    console.log(ids)
    return this.http.post(this.url+'/delete',ids);
  }

  update(user:any, type:string){
    if(type=='bUpdate'){
      user._id=this.arr;
    }else{
      user._id=[user._id]
    }
    console.log(user)
    return this.http.put(this.url,user);
  }
}
