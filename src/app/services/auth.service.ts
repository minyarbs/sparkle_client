import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public route:Router
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

  register(){

  }
}
