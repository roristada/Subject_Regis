import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RegistrationComponent } from './components/registration/registration.component';
import { AddDropComponent } from './components/add-drop/add-drop.component';
import { ChangeSubComponent } from './components/change-sub/change-sub.component';
import { RegisResultComponent } from './components/regis-result/regis-result.component';
import { SubjTableComponent } from './components/subj-table/subj-table.component';
import { ContractComponent } from './components/contract/contract.component';
import { SubmitRegisComponent } from './components/registration/submit-regis/submit-regis.component';

import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { TeacherComponent } from './components/teacher/teacher.component';
import { RegisComponent } from './components/regis/regis.component';
import { StudentlistComponent } from './components/studentlist/studentlist.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    RegistrationComponent,
    AddDropComponent,
    ChangeSubComponent,
    RegisResultComponent,
    SubjTableComponent,
    ContractComponent,
    SubmitRegisComponent,
    TeacherComponent,
    RegisComponent,
    StudentlistComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
