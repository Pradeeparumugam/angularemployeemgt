import { Component, OnInit } from '@angular/core';
import { Employee } from '../class/employee';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  employ:Employee=undefined;
  addEmployee(form:any){
    let data=form.value;
    let empname=data.empname;
    let empid=data.empid;
    this.employ=new Employee(empname,empid);
  }

}
