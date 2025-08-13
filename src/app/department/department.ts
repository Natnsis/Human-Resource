import { Component } from '@angular/core';
import { DepartmentTable } from '../components/department-table/department-table';

@Component({
  selector: 'app-department',
  imports: [DepartmentTable],
  templateUrl: './department.html',
  styleUrl: './department.css',
})
export class Department {}
