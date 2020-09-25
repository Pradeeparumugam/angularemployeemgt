import { Component, OnInit } from '@angular/core';
import { Employee } from '../class/employee';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  employee:Employee=new Employee("employ",777)
}
