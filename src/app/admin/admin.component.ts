import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { SerService } from '../ser.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent  {
  AdminId:string="";
  password:string="";
  r:string="";
  showpassword:string="";


  constructor(private router:Router,private ds:SerService) {
  }

  onSubmit(data){
    console.log(data);
    this.ds.sent(data).subscribe(res=>{
      if(res[0]!=null){
        alert("login successful");
        this.router.navigate(['/adminlogin']);
      }

      else{
        alert("login failed");
      }
    });
  }



// un:string="admin";
// pw:string="admin";
// s:string="";
// login(un:string,pw:string){
//   if(un==this.un&&this.pw){
//     this.router.navigate(['/adminlogin']);
//   }
//   else{
//     this.s="login unsuccessful";
//   }
  
// }

}
  //ngOnInit() {
    
    // }

    // onSubmit():Observable<any>{
    //     return this.hc.get<any>("/login/admin");
    // }

  // un:string="admin";
  // pw:string="admin";
  // msg:string=null;
  // x:string;
  // // AdminId:string=null;
  // password:string=null;
  
  //  r:boolean=false;
  // onSubmit(un,pw)
  // {
  //   if(this.un==un&&this.pw==pw)
  //   {
  //     this.msg="loginsuccessful";
  //     this.router.navigate(['/adminlogin']);
  //     console.log(this.msg);
      
  //   }
  //   else{
  //     this.msg="Login unsuccessful";
  //     console.log(this.msg);
      
  //   }
  // }


