import { Component, OnInit } from '@angular/core';
import { SerService } from '../ser.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminLoginComponent implements OnInit {
 
  data=[];

  constructor() { }

  ngOnInit() {
    
  }

   studet(data){
     this.data=data;
   }
  


  
}
