import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//mport { EmployeeRegistrationFormComponent } from './employee-registration-form/employee-registration-form.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
//import { EmployeeRegistrationComponent } from './employee-list/employee-registration.component';

const routes: Routes = [
  {path:'register-user', component:EmployeeRegistrationComponent},
  {path:'employee-list', component: EmployeeListComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
