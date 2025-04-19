import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { incrementCounter } from '../store/counter.action';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrl: './one.component.scss'
})
export class OneComponent {
 constructor (private store:Store<AppState>){}

 incrementCounte(){
  this.store.dispatch(incrementCounter())
 }
}
