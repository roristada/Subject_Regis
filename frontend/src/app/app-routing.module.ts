import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AddDropComponent } from './components/add-drop/add-drop.component';
import { ChangeSubComponent } from './components/change-sub/change-sub.component';
import { RegisResultComponent } from './components/regis-result/regis-result.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SubjTableComponent } from './components/subj-table/subj-table.component';
import { ContractComponent } from './components/contract/contract.component';
import { SubmitRegisComponent } from './components/registration/submit-regis/submit-regis.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { RegisComponent } from './components/regis/regis.component';
import { StudentlistComponent } from './components/studentlist/studentlist.component';
import { LoginComponent } from './components/login/login.component';



const routes: Routes = [
  { path: 'homepage',component: HomepageComponent},
  { path: 'add-drop',component: AddDropComponent},
  { path: 'change-sub',component: ChangeSubComponent},
  { path: 'regisresult',component: RegisResultComponent},
  { path: 'registration',component: RegistrationComponent},
  { path: 'subjtable',component: SubjTableComponent},
  { path: 'contract',component: ContractComponent},
  { path: 'submit-regis',component: SubmitRegisComponent},
  { path: 'teacher',component: TeacherComponent},
  { path: 'regis',component: RegisComponent},
  { path: 'login' , component: LoginComponent},
  { path: 'studentlist' , component: StudentlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
