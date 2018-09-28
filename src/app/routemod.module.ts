import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { StudentComponent } from './student/student.component';
import { FormComponent } from './form/form.component';

import { RuleComponent } from './rule/rule.component';
import { AdminLoginComponent } from './adminlogin/adminlogin.component';
import { Home1Component } from './home1/home1.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { AddcoursesComponent } from './addcourses/addcourses.component';
import { AddadminComponent } from './addadmin/addadmin.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { FormsModule } from '@angular/forms';
import { StudetComponent } from './studet/studet.component';

import { EmpdetComponent } from './empdet/empdet.component';
import { ContactComponent } from './contact/contact.component';
import { StucourseComponent } from './stucourse/stucourse.component';




@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '', component: HomeComponent
      },
      {
        path: "Login", component: LoginComponent,
        children: [
                    { path: "AdminLogin", component: AdminComponent },
                    { path: "StudentLogin", component: StudentComponent },
                    { path: '', component: RuleComponent }
                  ]
      },

      {
        path: "adminlogin", component: AdminLoginComponent,
         children: [
                    {path: "home1", component: Home1Component},
                    { path: "addstudents", component: AddstudentComponent },
                    { path: "addemployee", component: AddemployeeComponent },
                    { path: "addcourses", component: AddcoursesComponent },
                    { path: "addadmin", component: AddadminComponent },
                    { path: "contact", component: ContactComponent },
                    { path: "view", component: ViewComponent},
                    { path: '', component: Home1Component },
                    { path: "studet", component: StudetComponent,
                      children:[
                                {path:'view1',redirectTo:'/adminlogin/view',pathMatch:"full"}
                              ]
                    },

                    { path: "stucourse", component: StucourseComponent },
                    { path: "empdet", component: EmpdetComponent },
                    ]

      },
      
        {path:"Home",component:HomeComponent},
        {path:"About",component:AboutComponent}


    ])
  ],

  exports: [RouterModule, FormsModule]

})
export class RoutemodModule { }
