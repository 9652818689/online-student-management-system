import { Component, OnInit } from '@angular/core';
import { SerService } from '../ser.service';

@Component({
  selector: 'app-addcourses',
  templateUrl: './addcourses.component.html',
  styleUrls: ['./addcourses.component.css']
})
export class AddcoursesComponent implements OnInit {

  constructor(private ds:SerService) { }
  Typeofcourse:string="";
  Branch:string="";
  Affiliated:string="";
  fee:string="";
  
  
  data=[];
  ngOnInit() {
  }
  submit(data){
    console.log(data);
    this.ds.savaData2(data).subscribe(data=>this.data=data);
    
  }


}
