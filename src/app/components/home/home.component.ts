import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter, lastValueFrom } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mySubscription: any;

form:FormGroup;
  constructor(
    public router:Router,
    private formBuilder: FormBuilder,
    public auth:AuthService,
    private service:ReviewService
  ) { }
isloggedIn:boolean=this.auth.isloggedin;
  ngOnInit(): void {
    this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.refresh();
    });
    this.form = this.formBuilder.group({
      
      message:['',Validators.required]
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

async onSubmit(){
await lastValueFrom(this.service.submitReview(this.form.value.message))
this.form.reset()
}
}
