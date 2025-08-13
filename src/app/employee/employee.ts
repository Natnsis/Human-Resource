import { Component } from '@angular/core';
import { EmployeeTable } from '../components/employee-table/employee-table';

@Component({
  selector: 'app-employee',
  imports: [EmployeeTable],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee {}
