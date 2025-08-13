import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-employee-table',
  imports: [MatCardModule, MatTableModule],
  templateUrl: './employee-table.html',
  styleUrl: './employee-table.css',
})
export class EmployeeTable {
  displayedColumns: string[] = ['id', 'name', 'department', 'salary'];
  dataSource = [
    { id: 1, name: 'Michael Brown', department: 'IT', salary: 5000 },
    { id: 2, name: 'Sarah Johnson', department: 'HR', salary: 4500 },
  ];
}
