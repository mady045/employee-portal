import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { Employee } from '../employee-list/employee';
import { EmployeeService } from '../employee-list/employee.service';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {

  employees: Employee[];
  firstName: string;
  lastName: string;
  gender: string;
  dob: string;
  departmentName: string;
  registerForm: FormGroup;
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
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      departmentName: ['', Validators.required]
    });
    this.getEmployees();
  }

  SaveData(): void{
    this.newEmployee = new Employee();
    //alert(this.registerForm.get('firstName').value);
    if(this.registerForm.get('firstName').value == "" ||  this.registerForm.get('lastName').value == ""){
      return;
    }
    this.newEmployee.firstName =this.registerForm.get('firstName').value;
    this.newEmployee.lastName =this.registerForm.get('lastName').value;
    this.newEmployee.gender = this.registerForm.get('gender').value
    this.newEmployee.dob =this.registerForm.get('dob').value
    this.newEmployee.departmentName =this.registerForm.get('departmentName').value
    
    this.employeeService.AddEmployee(this.newEmployee);
    this.registerForm.reset();
   }

   
   Cancel():void{
    this.registerForm.reset();
    }


}
