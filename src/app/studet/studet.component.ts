import { Component, OnInit } from '@angular/core';
import { SerService } from '../ser.service';

@Component({
  selector: 'app-studet',
  templateUrl: './studet.component.html',
  styleUrls: ['./studet.component.css']
})
export class StudetComponent implements OnInit {
  EnrollementId:string="";
  FirstName:string="";
  LastName:string="";
  Country:string="";
  Gender1:string="";
  Gender2:string="";
  EailId:string="";
  StateName:string="";
  Address:string="";
  StudentId:string="";
  Studentpw:string="";
  Springsemester:string="";
  Fallsemester:string="";
  Summersemester:string="";
  searchTerm:string="";
  arr: object[]=[];
  
  obj:any={};
  b:boolean;
  d:object[]=[];
  constructor(private ds: SerService) { }

  ngOnInit() {
    this.ds.getData().subscribe(a => this.arr = a);
  }

  
  delete(v)
  {
    console.log(v);
    this.ds.remove1(v).subscribe(data=>this.arr=data);
  }

  edit(v)
  {
  this.obj=v;
  console.log(this.obj);
  this.b=true;
  
  }

  update()
  {
    this.ds.update(this.obj).subscribe(s=>this.d=s);
    this.b=false;
  }
  

}


