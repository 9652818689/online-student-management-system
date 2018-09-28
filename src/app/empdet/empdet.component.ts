import { Component, OnInit } from '@angular/core';
import { SerService } from '../ser.service';

@Component({
  selector: 'app-empdet',
  templateUrl: './empdet.component.html',
  styleUrls: ['./empdet.component.css']
})
export class EmpdetComponent implements OnInit {
  EnrollementId:string="";
  FirstName:string="";
  LastName:string="";
  Country:string="";
  Gender1:string="";
  Gender2:string="";
  EailId:string="";
  StateName:string="";
  Address:string="";
  
  arr2:object[]=[];
  obj:any={};
  b:boolean;
  constructor(private ds:SerService) { }

  ngOnInit() {
    console.log('emp comp');
    this.ds.getData2().subscribe(b=>this.arr2=b);
  }
  
  delete(v)
  {
    console.log(v);
    this.ds.remove3(v).subscribe(data=>this.arr2=data);
  }

  edit(v)
  {
  this.obj=v;
  console.log(this.obj);
  this.b=true;
  
  }

  update()
  {
    this.ds.update3(this.obj).subscribe(s=>this.arr2=s);
    this.b=false;
  }
  



}
