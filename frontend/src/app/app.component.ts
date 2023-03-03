import { Component } from '@angular/core';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  faPowerOff = faPowerOff
  logo:string = "assets/images/logo_kmutnb.png"
}
