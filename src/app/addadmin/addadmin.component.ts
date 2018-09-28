import { Component, OnInit } from '@angular/core';
import { SerService } from '../ser.service';

@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.css']
})
export class AddadminComponent implements OnInit {
  constructor(private ds:SerService) { }
  Name:string="";
  Branch:string="";
  id:string="";
  UserId:string="";
  password:string="";
  

  data=[];
  ngOnInit() {
  }
  submit(data){
    console.log(data);
    this.ds.savaData4(data).subscribe(data=>this.data=data);
    
  }}
