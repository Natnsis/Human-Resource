import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-salary-table',
  imports: [MatCardModule, MatTableModule],
  templateUrl: './salary-table.html',
  styleUrl: './salary-table.css',
})
export class SalaryTable {
  displayedColumns: string[] = ['id', 'employee', 'amount'];
  dataSource = [
    { id: 1, employee: 'Michael Brown', amount: 5000 },
    { id: 2, employee: 'Sarah Johnson', amount: 4500 },
  ];
}
