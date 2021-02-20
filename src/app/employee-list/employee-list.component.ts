import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from './employee';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];
  firstName: string;
  lastName: string;
  gender: string;
  dob: string;
  departmentName: string;
  submitted: boolean;
  fName:string;
  
  newEmployee: Employee; 
  constructor(private employeeService: EmployeeService,private formBuilder: FormBuilder) {

   }

   getEmployees() {
     
     this.SortEmployee(this.employeeService.getEmployees());
     
  }

  private SortEmployee(test: Employee[]) {
    this.employees = test.sort(function (a, b) {
      var nameA = a.firstName.toLowerCase(), nameB = b.firstName.toLowerCase();
      if (nameA < nameB) //sort string ascending
        return -1;
      if (nameA > nameB)
        return 1;
      return 0;
    });
  }

  ngOnInit(): void {

    this.getEmployees();
  }

  



    showEmployee():void{
      this.SortEmployee(this.employeeService.getEmployees());

    }


}
