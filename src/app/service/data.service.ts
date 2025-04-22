import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getUser(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
  demoData:any
  getDemoData(data:any){
    this.demoData= data
  }
  sendDemodata(){
    return this.demoData
  }
}
