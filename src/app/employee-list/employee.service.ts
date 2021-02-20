import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { employees } from './employee-data';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  getEmployees() {
    
     employees.sort(function(a, b){
      var nameA=a.firstName.toLowerCase(), nameB=b.firstName.toLowerCase()
      if (nameA < nameB) //sort string ascending
          return -1 
      if (nameA > nameB)
          return 1
      return 0 
  });
  return employees;
  }


  AddEmployee(employee){
    employees.push(employee);
  }
  


}
