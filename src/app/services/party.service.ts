import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { Themes } from '../models/themes';

@Injectable({
  providedIn: 'root'
})
export class PartyService {
events:Themes[]=[];


constructor(private http :HttpClient) { 
   
  }

getEvents(){
  this.events=[]
  return  this.http.get<{[key: string]: Themes}>('http://localhost:3000/products')
  .pipe(map((res)=>{
    for(const key in res){
      if(res.hasOwnProperty(key)){
      this.events.push({...res[key], _id:key})
     
    } 
   
  }
  }))
   

    
    
}
}
