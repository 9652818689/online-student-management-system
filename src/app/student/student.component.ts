import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SerService } from '../ser.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  Studentid:string="";
  password:string="";
  
  showpassword:string="";


  constructor(private router: Router, private ds: SerService) {

  }

  ngOnInit() {
  }

  onSubmit(data){
    console.log(data);
    this.ds.sentData(data).subscribe(res=>{
      if(res[0]!=null){
        alert("login successful");
        this.router.navigate(['/adminlogin/studet']);
      }

      else{
        alert("login failed");
      }
    });
  }




  // un:string="student";
  // pw:string="student";
  // msg:string="";
  // x:string;

  r: boolean = false;
  // onSubmit(un,pw)
  // {
  //   if(this.un==un&&this.pw==pw)
  //   {
  //     // this.msg="loginsuccessful";
  //     this.router.navigate(['/adminlogin']);

  //   }
  //   else{
  //     this.msg="Login unsuccessful";
  //   }
  // }


}