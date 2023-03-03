import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-regis-result',
  templateUrl: './regis-result.component.html',
  styleUrls: ['./regis-result.component.css']
})
export class RegisResultComponent implements OnInit {

  RegisterData : any;
  constructor(private service : ApiService) { }

  ngOnInit(): void {
    // this.service.getRegisterdata().subscribe((res)=>{
    //   this.RegisterData = res.data;
    // })
  }

  ChangeValue(x:any){
    console.log(x.target.value);
    let sy = x.target.value.split('/');
    console.log(sy[0]," ",sy[1])
    let y = sy[1];
    let s = sy[0];
    this.service.showSubject_year(y,s).subscribe((res)=>{
    this.RegisterData = res.data;
   })
  }

}
