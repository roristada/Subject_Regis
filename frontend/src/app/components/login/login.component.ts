import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router , private service: ApiService) { }


  loginForm = new FormGroup({
      'std_id' : new FormControl(''),
      'password' : new FormControl(''),
      'firstname' : new FormControl(''),
      'lastname' : new FormControl(''),
      'std_year' : new FormControl('3')
    })

  ngOnInit(): void {

  }
  submit(){
    console.log(this.loginForm.value)
    this.service.createStudentData(this.loginForm.value).subscribe()
  }
  login(){
    this.router.navigateByUrl('/teacher')
  }
}
