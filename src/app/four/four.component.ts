import { Component, computed, effect, OnInit, signal, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrl: './four.component.scss'
})
export class FourComponent implements OnInit{
constructor(){
  effect(() => {
    console.log('Count changed to:', this.a(),this.doubleCoutn());
  });
}

   a=signal(0)
   increaseCount(){
    this.a.update(v=>v+1)
   } 
   decreaseCount(){
    if(this.a()!=0){

      this.a.update(v=>v-1)
    }
   }
doubleCoutn=computed(()=>this.a() *3)
ngOnInit(): void {
 
}
@ViewChildren('myInputs') myInputs:any
myInput(data:any){

  console.log(this.myInputs);
}

}
