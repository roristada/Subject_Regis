import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  SubjectData : any;
  regisdata !: FormGroup
  // AddData : Object[] = [];
  // Objectdata !: Object;
  // selectedDevice  : any

  constructor(private router: Router , private service: ApiService) { }

  ngOnInit(): void {
    console.log()
    // console.log(this.SubjectData)
    this.service.getSubject_year(1,1).subscribe((res: { data: any; })=>{
      this.SubjectData = res.data;
  })
  // console.log(this.SubjectData)
  }

  sid !: any
  tid !: any
  sjid !: any
  sname !: any
  sec !: any
  u!: any
  mstd !: any
  y !: any
  s !: any

  select(std_id : any,teacher_id: any , subject_id: any ,section: any , unit: any , max_std : any , year : any , semester : any){
    //console.log(subject_id," ",section," ",subject_name," ",time," ",unit)
    this.sid = std_id
    this.tid = teacher_id
    this.sjid = subject_id
    // this.sname = subject_name
    this.sec = section
    this.u = unit
    this.mstd = max_std
    this.y = year
    this.s = semester

    this.regisdata = new FormGroup({
    'std_id' : new FormControl(this.sid),
    'teacher_id' : new FormControl(this.tid),
    'subject_id' : new FormControl(this.sjid),
    // 'subject_name' : new FormControl(this.sname),
    'section' : new FormControl(this.sec),
    'unit' : new FormControl(this.u),
    'max_std' : new FormControl(this.mstd),
    'year' : new FormControl(this.y),
    'semester' : new FormControl(this.s),
  })
  console.log(this.regisdata.value)
  this.service.createRegisterData(this.regisdata.value).subscribe()
  }
  nextpage(){
    this.router.navigateByUrl('/submit-regis')
    // console.log(this.regisdata.value)
  }

  ChangeValue(x:any){
    // console.log(x.target.value);
    let sy = x.target.value.split('/');
    // console.log(sy[0]," ",sy[1])
    let y = sy[1];
    let s = sy[0];
    this.service.getSubject_year(y,s).subscribe((res: { data: any; })=>{
        this.SubjectData = res.data;
    })
  }
}

//  this.Objectdata = data

    //this.Objectdata.std_id = sid
    // this.AddData.push(this.Objectdata);
    // console.log(this.AddData)

// for(let i = 0 ; i < this.AddData.length ; i++){

    //   this.Objectdata = this.AddData[i];

    //    this.service.createRegisterData(this.Objectdata).subscribe()
    // }
    // console.log(this.Objectdata)
