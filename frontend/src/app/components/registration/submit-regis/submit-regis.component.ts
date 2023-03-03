import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-submit-regis',
  templateUrl: './submit-regis.component.html',
  styleUrls: ['./submit-regis.component.css']
})
export class SubmitRegisComponent implements OnInit {

  RegisterData : any;
  constructor(private router:Router , private service: ApiService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.service.getRegisterdata().subscribe((res)=>{
      this.RegisterData = res.data;
    })
  }
  deleteId(subid:any,sec:any){
    this.service.deleteRegisterData(subid,sec).subscribe()
    this.getData()
  }

  back(){
    this.router.navigateByUrl('/registration')
  }
  submit(){
    this.router.navigateByUrl('/regis')
  }

}
