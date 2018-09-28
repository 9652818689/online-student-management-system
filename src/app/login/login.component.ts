import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  s1:string;
  AdminLogin():void{
    // this.s1;
    console.log(this.s1);
  }
  s2:string;
  StudentLogin():void{
    // this.s2;
    console.log(this.s2);
  }
}
