import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-change-sub',
  templateUrl: './change-sub.component.html',
  styleUrls: ['./change-sub.component.css']
})
export class ChangeSubComponent implements OnInit {

  RegisterData : any;
  constructor(private router:Router , private service: ApiService) { }

  ngOnInit(): void {
    this.service.getRegisterdata().subscribe((res)=>{
          this.RegisterData = res.data;
        })
  }

  ChangeSecForm = new FormGroup({
    'std_id' : new FormControl('0'),
    'subject_id' : new FormControl(''),
    'section' : new FormControl(''),
    'max_std' : new FormControl('0')
  })

  submit(){
    this.router.navigateByUrl('/regis')
    this.service.updateRegisterData(this.ChangeSecForm.value,this.ChangeSecForm.value.subject_id).subscribe()
  }
}
