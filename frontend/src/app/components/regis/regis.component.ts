import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-regis',
  templateUrl: './regis.component.html',
  styleUrls: ['./regis.component.css']
})
export class RegisComponent implements OnInit {

  RegisterData : any;
  constructor(private service : ApiService) { }

  ngOnInit(): void {
     this.service.getRegisterdata().subscribe((res)=>{
      this.RegisterData = res.data;
      //console.log(this.RegisterData)
    })
  }

}
