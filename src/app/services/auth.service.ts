import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public route:Router,
    private http:HttpClient
  ) { }
  login(){
localStorage.setItem('loggedIn','true')
this.route.navigate(['home'])
  }
  logout(){
localStorage.removeItem('loggedIn')
  }
  get isloggedin(): boolean{
    let val=localStorage.getItem('loggedIn')
    if (val==='true')  {
      return true;
    }
    else {
      return false;
    }
  }

  register(username:string,email:string,password:string){
    const res= this.http.post('http://localhost:3000/account',{"UserName":username,"Password":password,"Email":email})
    return res
  }
}
