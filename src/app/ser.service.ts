import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SerService {

  constructor(private hc: HttpClient) {
  }

   getData(): Observable<any> {

     return this.hc.get('/adminlogin/studet');

   }
    getData1(): Observable<any> {
      return this.hc.get('/adminlogin/stucourse');
    }
   getData2(): Observable<any> {
     console.log('emp data ');
     return this.hc.get('/adminlogin/empdet');
   }
  data1: any = {};
  data: any = {};
  
  p;
  k;
  set2(data1) {

    this.data = data1;
    console.log(this.data);
  }

  get() {
    return this.data;

  }

  savaData(data): Observable<any> {
    return this.hc.post('/adminlogin/addstudents', data);
  }
  savaData3(data): Observable<any> {
    return this.hc.post('adminlogin/addemployee', data);
  }
  savaData2(data): Observable<any> {
    return this.hc.post('/adminlogin/addcourses', data);
  }
  savaData4(data): Observable<any> {
    return this.hc.post('/adminlogin/addadmin', data);
  }

 sent(data):Observable<any>{
   this.p=data;
   console.log(this.p);
   return this.hc.post('/Login/AdminLogin',this.p)
 }

 sentData(data):Observable<any>{
  this.p=data;
  console.log(this.p);
  return this.hc.post('/Login/StudentLogin',this.p)
}
remove(id):Observable<any>
{
  console.log('in service' +id);
  return this.hc.delete('/adminlogin/stucourse/'+id);
}

remove1(id):Observable<any>
{
  console.log('in service' +id);
  return this.hc.delete('/adminlogin/studet/'+id);
}

remove3(id):Observable<any>
{
  console.log('in service' +id);
  return this.hc.delete('/adminlogin/empdet/'+id);
}

update3(id):Observable<any>
{
return this.hc.put('/adminlogin/empdet/',+id);
}


update1(id):Observable<any>
{
return this.hc.put('/adminlogin/studet/',+id);
}



update(id):Observable<any>
{
return this.hc.put('/adminlogin/stucourse/',+id);
}


}


