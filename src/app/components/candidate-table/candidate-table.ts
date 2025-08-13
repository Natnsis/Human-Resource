import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-candidate-table',
  imports: [MatCardModule, MatTableModule],
  templateUrl: './candidate-table.html',
  styleUrl: './candidate-table.css',
})
export class CandidateTable {
  displayedColumns: string[] = ['id', 'name', 'email', 'position'];
  dataSource = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      position: 'Frontend Dev',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      position: 'HR Manager',
    },
  ];
}
