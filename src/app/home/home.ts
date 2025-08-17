import { Component, OnInit } from '@angular/core';
import { Header } from '../components/header/header';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

import { EmployeeModel } from '../models/employee.model';
import { DepartmentModel } from '../models/department.model';
import { InMemoryDataService } from '../services/in-memory-data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Header,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatIconModule,
  ],
  templateUrl: './home.html',
})
export class Home implements OnInit {
  displayedColumns: string[] = ['id', 'departmentName', 'employeeName'];
  dataSource = new MatTableDataSource<any>();

  constructor(private dbService: InMemoryDataService) {}

  ngOnInit(): void {
    this.loadTableData();
  }

  /** Loads and maps department + employee data into tableData */
  private loadTableData(): void {
    const db = this.dbService.createDb();
    const employees: EmployeeModel[] = db.employee;
    const departments: DepartmentModel[] = db.department;

    const tableData = departments
      .map((dept, index) => {
        const emp = employees.find((e) => e.id === dept.employeeId);
        return {
          id: index + 1,
          departmentName: dept.departmentName,
          employeeName: emp?.name ?? 'Unknown',
        };
      })
      .filter((row) => row.employeeName !== 'Unknown');

    this.dataSource.data = tableData;
  }

  /** Filters the table by search input */
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
