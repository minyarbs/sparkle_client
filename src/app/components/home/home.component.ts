import { Component, OnInit } from '@angular/core';
import {  NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mySubscription: any;

  constructor(
    public router:Router,
    public auth:AuthService
  ) { }
isloggedIn:boolean=this.auth.isloggedin;
  ngOnInit(): void {
    this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.refresh();
    });
  }
  refresh(){
    this.isloggedIn=this.auth.isloggedin;
  }
gotoRegister(){
  this.router.navigate(['../register']);
}
logout(){
  this.auth.logout();
  this.refresh()
}
gotoParty(name: string){
  this.router.navigate(['../party/'+name]);
}
}
