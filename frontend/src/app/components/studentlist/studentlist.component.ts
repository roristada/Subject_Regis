import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {

  StudentData : any
  constructor(private service: ApiService) {}

  ngOnInit(): void {
    console.log(this.StudentData)
    // this.service.getStudentdata().subscribe((res)=>{
    //   this.StudentData = res.data;
  // })
  }

}
