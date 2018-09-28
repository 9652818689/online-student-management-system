import { Component, OnInit } from '@angular/core';
import { SerService } from '../ser.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
  arr:object[];
  EnrollementId:string="";
  FirstName:string="";
  LastName:string="";
  Country:string="";
  Gender1:string="";
  Gende2:string="";
  EailId:string="";
  StateName:string="";
  Address:string="";
  StudentId:string="";
  Studentpw:string="";
  Springsemester:string="";
  Fallsemester:string="";
  Summersemester:string="";

  constructor(private ds:SerService) { }
  data=[];
  ngOnInit() {
    this.ds.getData().subscribe(a=>this.arr=a);
  }
  submit(data){
    console.log(data);
    this.ds.savaData(data).subscribe(data=>this.data=data);
    
  }
  
}
