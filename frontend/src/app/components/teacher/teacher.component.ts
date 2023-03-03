import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  SubjectData : any;
  StudentData : any;
  constructor(private router: Router , private service: ApiService) { }

  ngOnInit(): void {
  //  this.service.getTeacherData().subscribe((res)=>{
  //     this.SubjectData = res.data;
  //   });
  }

  ChangeValue(x:any){
    let tid = x.target.value
    //console.log(tid);
    this.service.getTeacherData(tid).subscribe((res)=>{
      this.SubjectData = res.data
    })
  }
  next(){
    // console.log(this.SubjectData[i])
    //this.router.navigateByUrl('/studentlist')
  }
  // view(i : any){
  //   // this.router.navigateByUrl('/studentlist')
  //   let tid = this.SubjectData[i].teacher_id
  //   let sjid = this.SubjectData[i].subject_id
  //   let sec = this.SubjectData[i].section
  //   console.log(tid,sjid,sec)
  //   this.service.getStudentdata(tid,sjid,sec).subscribe((res)=>{
  //     this.StudentData = res.data;
  // })
  // console.log(this.StudentData)
  // }
}

