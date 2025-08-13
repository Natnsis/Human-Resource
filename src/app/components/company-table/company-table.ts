import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-company-table',
  imports: [MatCardModule, MatTableModule],
  templateUrl: './company-table.html',
  styleUrl: './company-table.css',
})
export class CompanyTable {
  displayedColumns: string[] = ['id', 'name', 'industry'];
  dataSource = [
    { id: 1, name: 'Tech Corp', industry: 'IT' },
    { id: 2, name: 'Health Inc', industry: 'Healthcare' },
  ];
}
