import { Component, OnInit } from '@angular/core';
import { Employee } from '../class/employee';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  employees:Employee[]=[
    new Employee("emp1",111),
    new Employee("emp2",222),
    new Employee("emp3",333)
  ];
    name:string="pradeep";
  

}
