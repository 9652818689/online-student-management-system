import { Component, OnInit } from '@angular/core';
import { SerService } from '../ser.service';


@Component({
  selector: 'app-stucourse',
  templateUrl: './stucourse.component.html',
  styleUrls: ['./stucourse.component.css']
})
export class StucourseComponent implements OnInit {
  Typeofcourse:string="";
  Branch:string="";
  Affiliated:string="";
  fee:string="";
  searchTerm:string="";

  obj:any={};
  d:object[]=[];
    arr1:object[]=[];
  b:boolean;
  constructor(private ds:SerService) { }

  ngOnInit() {
     this.ds.getData1().subscribe(b=>this.arr1=b);
    // console.log(this.arr1);
  }
  delete(v)
  {
    console.log(v);
    this.ds.remove(v).subscribe(data=>this.arr1=data);
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
