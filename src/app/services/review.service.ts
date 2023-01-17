import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) { }
  submitReview(message:string){
return this.http.post('http://localhost:3000/reviews',{"text":message})
    
  }
}
