import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-drop',
  templateUrl: './add-drop.component.html',
  styleUrls: ['./add-drop.component.css']
})
export class AddDropComponent implements OnInit {

  RegisterData : any;
  AddOrDrop : any;
  AddSubject : any;
  constructor(private router:Router , private service: ApiService) { }

  ngOnInit(): void {
    this.service.getRegisterdata().subscribe((res)=>{
      this.RegisterData = res.data;
    })
  }

  Add_DropForm = new FormGroup({
    'std_id' : new FormControl(''),
    'teacher_id' : new FormControl(''),
    'subject_id' : new FormControl(''),
    // 'subject_name' : new FormControl(''),
    'section' : new FormControl(''),
    'unit' : new FormControl(0),
    'max_std' : new FormControl(''),
    'year' : new FormControl(''),
    'semester' : new FormControl(''),
  })

  add_or_drop(d:any){
   this.AddOrDrop = d;
  }

  submit(){
    this.router.navigateByUrl('/regis')
    //console.log(this.Add_DropForm.value)
    if(this.AddOrDrop == 'a'){

      // let sjid = this.Add_DropForm.value.subject_id
      // let sec = this.Add_DropForm.value.section
      // let tid = this.Add_DropForm.value.teacher_id
      // this.service.getAddSubjectdata(this.Add_DropForm.value.subject_id,this.Add_DropForm.value.section,this.Add_DropForm.value.teacher_id).subscribe((res: {data : any})=>{
      //   this.AddSubject = res.data
      // })
      console.log(this.AddSubject)
      this.service.createRegisterData(this.Add_DropForm.value).subscribe()
    }
    else if(this.AddOrDrop =='d'){
      this.service.deleteRegisterData(this.Add_DropForm.value.subject_id,this.Add_DropForm.value.section).subscribe()
    }
  }

}
