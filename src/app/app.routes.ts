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
    path: 'recruitment',
    loadComponent: () => {
      return import('./recruitment/recruitment').then((m) => m.Recruitment);
    },
  },
  {
    path: 'company',
    loadComponent: () => {
      return import('./employees/employees').then((m) => m.Employees);
    },
  },
  {
    path: 'request',
    loadComponent: () => {
      return import('./requests/requests').then((m) => m.RequestsComponent);
    },
  },
  {
    path: 'employees',
    loadComponent: () => {
      return import('./employees/employees').then((m) => m.Employees);
    },
  },
  {
    path: 'roles',
    loadComponent: () => {
      return import('./auth/roles/roles').then((m) => m.Roles);
    },
  },
  {
    path: 'candidate',
    loadComponent: () => {
      return import('./auth/candidate/candidate').then((m) => m.Candidate);
    },
  },
  {
    path: 'role-employee',
    loadComponent: () => {
      return import('./auth/role-employee/role-employee').then(
        (m) => m.RoleEmployee
      );
    },
  },
];
