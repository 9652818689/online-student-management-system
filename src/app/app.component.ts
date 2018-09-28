import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  b:boolean=true;
  hidelog(b):void
  {
    this.b=!this.b;
  }
  hidelog1(b):void{
    this.b=true;
  }
  hidelog2(b):void{
    this.b=true;
  }
}
