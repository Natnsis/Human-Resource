import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-department-table',
  imports: [MatCardModule, MatTableModule],
  templateUrl: './department-table.html',
  styleUrl: './department-table.css',
})
export class DepartmentTable {
  displayedColumns: string[] = ['id', 'name', 'head'];
  dataSource = [
    { id: 1, name: 'IT', head: 'Alex Green' },
    { id: 2, name: 'HR', head: 'Emily White' },
  ];
}
