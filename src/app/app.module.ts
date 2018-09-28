import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RoutemodModule } from './/routemod.module';
import { AdminComponent } from './admin/admin.component';
import { StudentComponent } from './student/student.component';
import { FormComponent } from './form/form.component';

import { RuleComponent } from './rule/rule.component';
import { AdminLoginComponent } from './adminlogin/adminlogin.component';
import { Home1Component } from './home1/home1.component';
import { ViewComponent } from './view/view.component';
import { ContactComponent } from './contact/contact.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AddcoursesComponent } from './addcourses/addcourses.component';
import { AddadminComponent } from './addadmin/addadmin.component';
import { LogoutComponent } from './logout/logout.component';
import { StudetComponent } from './studet/studet.component';

import { EmpdetComponent } from './empdet/empdet.component';
import { StucourseComponent } from './stucourse/stucourse.component';
import { EmppipePipe } from './emppipe.pipe';
import { CoupipePipe } from './coupipe.pipe';
import { StupipePipe } from './stupipe.pipe';





@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    StudentComponent,
    FormComponent,
    AdminLoginComponent,
    RuleComponent,
    Home1Component,
    ViewComponent,
    ContactComponent,
    AddstudentComponent,
    AddemployeeComponent,
    AddcoursesComponent,
    AddadminComponent,
    LogoutComponent,
    StudetComponent,
    StucourseComponent,
    EmpdetComponent,
    
    EmppipePipe,
    CoupipePipe,
    StupipePipe,
    
    
  
    
  ],
  imports: [
    BrowserModule,
    RoutemodModule, FormsModule, HttpClientModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
