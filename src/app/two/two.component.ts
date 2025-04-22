import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrl: './two.component.scss'
})
export class TwoComponent  implements OnInit{
myName: any;

  constructor(private data:DataService, private http:HttpClient, private router:Router,private activeRoute:ActivatedRoute){}

  ngOnInit(): void {

    this.myName=this.data.sendDemodata()
  }

}
