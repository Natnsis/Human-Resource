import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

import { EmployeeModel } from '../../models/employee.model';
import { EmployeeService } from '../../core/employee';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './employees.html',
  styleUrl: './employees.css',
})
export class EmployeesComponent implements OnInit {
  employees: EmployeeModel[] = [];
  form!: FormGroup;
  editingId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      department: ['', [Validators.required]],
      salary: [0, [Validators.required, Validators.min(0)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });

    this.load();
  }

  load(): void {
    this.employeeService.getAll().subscribe((data) => (this.employees = data));
  }

  submit(): void {
    if (this.form.invalid) return;

    const payload = {
      ...this.form.value,
      salary: Number(this.form.value.salary),
    } as Omit<EmployeeModel, 'id'>;

    if (this.editingId === null) {
      // CREATE
      this.employeeService.create(payload).subscribe(() => {
        this.form.reset({
          name: '',
          email: '',
          department: '',
          salary: 0,
          password: '',
        });
        this.load();
      });
    } else {
      // UPDATE
      const updated: EmployeeModel = {
        id: this.editingId,
        ...(payload as any),
      };
      this.employeeService.update(updated).subscribe(() => {
        this.cancelEdit();
        this.load();
      });
    }
  }

  edit(row: EmployeeModel): void {
    this.editingId = row.id;
    this.form.reset({
      name: row.name,
      email: row.email,
      department: row.department,
      salary: row.salary,
      password: row.password,
    });
  }

  cancelEdit(): void {
    this.editingId = null;
    this.form.reset({
      name: '',
      email: '',
      department: '',
      salary: 0,
      password: '',
    });
  }

  remove(id: number): void {
    this.employeeService.delete(id).subscribe(() => this.load());
  }

  trackById(_: number, e: EmployeeModel) {
    return e.id;
  }
}
