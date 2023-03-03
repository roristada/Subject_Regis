import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  map:string = "assets/images/map.PNG"
  constructor() { }

  ngOnInit(): void {
  }

}
