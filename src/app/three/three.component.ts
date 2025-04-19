import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrl: './three.component.scss'
})
export class ThreeComponent {
constructor(private router:Router, private activeRoute:ActivatedRoute){}
navigatetofourth(){
  this.router.navigate(['four'],{relativeTo:this.activeRoute})
}
}
