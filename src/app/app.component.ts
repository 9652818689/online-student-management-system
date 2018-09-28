import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  b:boolean=true;
  hidelog():void
  {
    this.b=!this.b;
  }
  hidelog1():void{
    this.b=true;
  }
  hidelog2():void{
    this.b=true;
  }
}
