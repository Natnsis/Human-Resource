import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./home/home').then((m) => m.Home);
    },
  },
  {
    path: 'candidate',
    loadComponent: () => {
      return import('./candidate/candidate').then((m) => m.Candidate);
    },
  },
  {
    path: 'company',
    loadComponent: () => {
      return import('./company/company').then((m) => m.Company);
    },
  },
  {
    path: 'department',
    loadComponent: () => {
      return import('./department/department').then((m) => m.Department);
    },
  },
  {
    path: 'salary',
    loadComponent: () => {
      return import('./salary/salary').then((m) => m.Salary);
    },
  },
  {
    path: 'employee',
    loadComponent: () => {
      return import('./employee/employee').then((m) => m.Employee);
    },
  },
];
