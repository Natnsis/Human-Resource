import { Component, OnInit } from '@angular/core';
import { Header } from '../components/header/header';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { InMemoryDataService } from '../services/in-memory-data.service';
import { EmployeeModel } from '../models/employee.model';
import { CandidateModel } from '../models/candidate.model';

interface CandidateRow {
  id: number;
  name: string;
  email: string;
  position: string;
  degree: string;
}

@Component({
  selector: 'app-recruitment',
  standalone: true,
  imports: [
    Header,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  templateUrl: './recruitment.html',
})
export class Recruitment implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'position',
    'degree',
    'actions',
  ];
  dataSource: MatTableDataSource<CandidateRow> =
    new MatTableDataSource<CandidateRow>([]);
  employees: EmployeeModel[] = [];

  constructor(
    private dbService: InMemoryDataService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    const db = this.dbService.createDb();
    this.employees = db.employee;

    const tableData: CandidateRow[] = db.candidate.map((cand, index) => ({
      id: index + 1,
      name: cand.name,
      email: cand.email,
      position: cand.position,
      degree: cand.degree,
    }));

    this.dataSource.data = tableData;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();
    this.dataSource.filterPredicate = (data: CandidateRow, filter: string) => {
      return (
        data.name.toLowerCase().includes(filter) ||
        data.email.toLowerCase().includes(filter) ||
        data.position.toLowerCase().includes(filter) ||
        data.degree.toLowerCase().includes(filter)
      );
    };
    this.dataSource.filter = filterValue;
  }

  accept(row: CandidateRow) {
    if (!this.employees.find((e) => e.email === row.email)) {
      const newEmployee: EmployeeModel = {
        id: this.employees.length + 1,
        name: row.name,
        email: row.email,
        department: row.position,
        salary: 0,
        password: 'default123',
      };
      this.employees.push(newEmployee);
      this.snackBar.open(
        `${row.name} has been added as an employee!`,
        'Close',
        {
          duration: 3000,
          panelClass: [
            '!bg-green-500',
            '!text-white',
            '!rounded-lg',
            '!px-4',
            '!py-2',
          ],
        }
      );
    } else {
      this.snackBar.open(`${row.name} already exists!`, 'Close', {
        duration: 3000,
        panelClass: [
          '!bg-red-500',
          '!text-white',
          '!rounded-lg',
          '!px-4',
          '!py-2',
        ],
      });
    }
  }

  reject(row: CandidateRow) {
    this.dataSource.data = this.dataSource.data.filter(
      (item) => item.id !== row.id
    );
    this.snackBar.open(`${row.name} has been rejected!`, 'Close', {
      duration: 3000,
      panelClass: [
        '!bg-gray-700',
        '!text-white',
        '!rounded-lg',
        '!px-4',
        '!py-2',
      ],
    });
  }
}
