import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrl: './two.component.scss'
})
export class TwoComponent {

  constructor(private http:HttpClient, private router:Router,private activeRoute:ActivatedRoute){}

 
}
