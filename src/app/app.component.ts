import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './store/app.state';
import { selectCount } from './store/counter.selector';
import { decrementCounter, incrementCounter } from './store/counter.action';
// import { selectCounter } from './store/counter.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project1';

  counter$:Observable<number>=new Observable<number>

  constructor(private store:Store<AppState>){
    this.counter$=store.select(selectCount)
  }
  onIncreament(){
    this.store.dispatch(incrementCounter())
  } 
  onDecrement(){
    this.store.dispatch(decrementCounter())
  }
}
