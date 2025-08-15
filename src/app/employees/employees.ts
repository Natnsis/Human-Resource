import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource } from '@angular/material/table';
import { Header } from '../components/header/header';
import { EmployeeModel } from '../models/employee.model';
import { EmployeeService } from '../services/InnerServices/employee.service';

@Component({
  selector: 'app-employees',
  imports: [
    Header,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  templateUrl: './employees.html',
  styleUrls: ['./employees.css'],
})
export class Employees implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'department',
    'salary',
    'actions',
  ];
  dataSource!: MatTableDataSource<EmployeeModel>;
  employees: EmployeeModel[] = [];

  employeeForm!: FormGroup;
  editingEmployeeId: number | null = null;

  constructor(private empService: EmployeeService, private fb: FormBuilder) {}

  ngOnInit() {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      department: ['', Validators.required],
      salary: [0, Validators.required],
    });

    this.loadEmployees();
  }

  loadEmployees() {
    this.empService.getAll().subscribe((data) => {
      this.employees = data;
      this.dataSource = new MatTableDataSource(this.employees);
      //filter
      this.dataSource.filterPredicate = (
        data: EmployeeModel,
        filter: string
      ) => {
        const searchStr = (
          data.id +
          data.name +
          data.department +
          data.salary
        ).toLowerCase();
        return searchStr.includes(filter);
      };
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();
    if (this.dataSource) this.dataSource.filter = filterValue;
  }

  editEmployee(employee: EmployeeModel) {
    this.editingEmployeeId = employee.id;
    this.employeeForm.patchValue({
      name: employee.name,
      department: employee.department,
      salary: employee.salary,
    });
  }

  onSubmit() {
    const formValue = this.employeeForm.value;

    if (this.editingEmployeeId) {
      // Update existing employee
      const updatedEmp: EmployeeModel = {
        id: this.editingEmployeeId,
        ...formValue,
        email: '',
        password: '',
      };
      this.empService.update(updatedEmp).subscribe(() => {
        this.loadEmployees();
        this.employeeForm.reset();
        this.editingEmployeeId = null;
      });
    } else {
      // Add new employee
      const newEmp: EmployeeModel = {
        id: this.generateId(),
        ...formValue,
        email: '',
        password: '',
      };
      this.empService.add(newEmp).subscribe(() => {
        this.loadEmployees();
        this.employeeForm.reset();
      });
    }
  }

  deleteEmployee(id: number) {
    this.empService.delete(id).subscribe(() => this.loadEmployees());
  }

  private generateId(): number {
    return this.employees.length > 0
      ? Math.max(...this.employees.map((e) => e.id)) + 1
      : 1;
  }
}
