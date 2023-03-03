import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _htpp:HttpClient) { }

  apiUrlsubject = 'http://localhost:3000/subject';
  apiUrlregister = 'http://localhost:3000/register';
  apiUrlteacher = 'http://localhost:3000/teacher';
  apiUrlstudent = 'http://localhost:3000/student';

  //get all data

  getSubjectdata():Observable<any>{
    return this._htpp.get(`${this.apiUrlsubject}`);
  }

  // getAddSubjectdata(subject_id : any , section : any , teacher_id : any):Observable<any>{
  //   return this._htpp.get(`${this.apiUrlsubject}/${subject_id}/${section}/${teacher_id}`,);
  // }

  getRegisterdata():Observable<any>{
    return this._htpp.get(`${this.apiUrlregister}`)
  }

  getStudentdata(tid:any , sjid : any, sec : any):Observable<any>{
    return this._htpp.get(`${this.apiUrlregister}/${tid}/${sjid}/${sec}`);
  }

  createRegisterData(data:any):Observable<any>{
    // console.log(data,'query')
    return this._htpp.post(`${this.apiUrlregister}`,data)
  }

  deleteRegisterData(subid:any,sec:any):Observable<any>{
    let sjid = subid
    let s = sec
    return this._htpp.delete(`${this.apiUrlregister}/${sjid}/${s}`)
  }

  updateRegisterData(data:any,id:any):Observable<any>{
    let ids = id
   return this._htpp.put(`${this.apiUrlregister}/${ids}`,data)
  }

  getSubject_year(y:any,s:any):Observable<any>{
    let year = y;
    let semester = s;
    return this._htpp.get(`${this.apiUrlsubject}/${year}/${semester}`)
  }

  showSubject_year(y:any,s:any):Observable<any>{
    let year = y
    let semester = s;
    return this._htpp.get(`${this.apiUrlregister}/${year}/${semester}`)
  }

  getTeacherData(y:any):Observable<any>{
    let year = y
    return this._htpp.get(`${this.apiUrlteacher}/${year}`)
  }

  createStudentData(data : any):Observable<any>{
    return this._htpp.post(`${this.apiUrlstudent}`,data)
  }


}
