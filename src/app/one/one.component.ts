import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { incrementCounter } from '../store/counter.action';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrl: './one.component.scss'
})
export class OneComponent implements OnInit{
 constructor (private store:Store<AppState>,private dataServ:DataService){}
ngOnInit(): void {
  this.sendData()
}
 incrementCounte(){
  this.store.dispatch(incrementCounter())
 }
 sendData(){
this.dataServ.getDemoData('shailesh')
 }
}
