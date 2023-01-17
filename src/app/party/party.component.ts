import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Route, Router, RouterEvent } from '@angular/router';
import { filter, lastValueFrom, map, Subscription } from 'rxjs';
import { Themes } from '../models/themes';
import { AuthService } from '../services/auth.service';
import { PartyService } from '../services/party.service';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})
export class PartyComponent implements OnInit {
clicked =false;
  events: Themes[]=[];
  img:string[];
  party:string;
  theme_elements:string[]=[];
  elements=['cake','balloons','deco','flowers','snacks'];
  isloggedIn:boolean=false
  
  constructor(private activatedroute: ActivatedRoute, private service :PartyService, private route:Router,public auth:AuthService) { }

 async ngOnInit() {
    this.party=this.activatedroute.snapshot.paramMap.get('partyname');
    this.party=this.party.toLowerCase()
    this.getEvents(this.party)
   
  }
async getEvents(party:string) {
  this.events=[]
    await lastValueFrom(this.service.getEvents())
    this.events=this.service.events
    for (let i =0 ; i< this.events.length;i++){
      const theme_name=this.events[i].theme_name
      
    const imgSingle='../assets/imgs/'+party+' '+theme_name+ ' deco.jpg';
  this.events[i].img=imgSingle
  }

  }
goto(num:number){
  this.theme_elements=[]
  this.clicked= true;
const theme_name= this.events[num].theme_name;
  for(let i=0 ; i<5;i++){
    
    const imgSingle='../assets/imgs/'+this.party+' '+theme_name+ ' '+this.elements[i]+'.jpg';
    console.log(imgSingle)
    this.theme_elements.push(imgSingle)
  }
}
gotoRegister(){
  this.route.navigate(['../login']);
}
logout(){
  this.auth.logout();
 
}
order(){
  this.route.navigate(['../order'])
}

}


