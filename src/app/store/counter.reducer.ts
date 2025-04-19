import { createReducer, on } from "@ngrx/store";
import { decrementCounter, incrementCounter } from "./counter.action";
// import { state } from "@angular/animations";



export interface CounterState{
    count:number;
}

export const initialCount:CounterState={
    count:0
}

export const reducer=createReducer(
    initialCount,
    on(incrementCounter,state=>({
        ...state,count:state.count+1
    })), 
    on(decrementCounter,state=>({
        ...state,count:state.count-1
    })),
)