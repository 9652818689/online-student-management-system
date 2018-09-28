import { Component, OnInit } from '@angular/core';
import { SerService } from '../ser.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  constructor(private ds:SerService) { }
  EnrollementId:string="";
  FirstName:string="";
  LastName:string="";
  Country:string="";
  Gender1:string="";
  Gender2:string="";
  EailId:string=""; 
  StateName:string=""; 
  Address:string=""; 


  data=[];
  ngOnInit() {
  }
  onSubmit(data){
    console.log(data);
    this.ds.savaData3(data).subscribe(data=>this.data=data);
    
  }

}
