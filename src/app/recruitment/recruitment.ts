import { Component, OnInit } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { ApplyingService } from '../services/InnerServices/applying.service';
import { EmployeeModel } from '../models/employee.model';
import { Header } from '../components/header/header';
import { CandidateModel } from '../models/candidate.model';
import { Subscription } from 'rxjs';

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
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatSnackBarModule,
    Header,
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
  private subscription!: Subscription;

  constructor(
    private applyingService: ApplyingService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    // Subscribe to the reactive candidate list
    this.subscription = this.applyingService.candidates$.subscribe(
      (candidates: CandidateModel[]) => {
        const tableData: CandidateRow[] = candidates.map((cand, index) => ({
          id: index + 1,
          name: cand.name,
          email: cand.email,
          position: cand.position,
          degree: cand.degree,
        }));
        this.dataSource.data = tableData;
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();
    this.dataSource.filterPredicate = (data: CandidateRow, filter: string) =>
      data.name.toLowerCase().includes(filter) ||
      data.email.toLowerCase().includes(filter) ||
      data.position.toLowerCase().includes(filter) ||
      data.degree.toLowerCase().includes(filter);
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
        }
      );
    } else {
      this.snackBar.open(`${row.name} already exists!`, 'Close', {
        duration: 3000,
      });
    }
  }

  reject(row: CandidateRow) {
    this.applyingService.removeCandidate(row.email);
    this.snackBar.open(`${row.name} has been Assessed!`, 'Close', {
      duration: 3000,
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
