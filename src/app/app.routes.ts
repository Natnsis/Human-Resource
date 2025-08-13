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
      return import('./requests/requests').then((m) => m.Requests);
    },
  },
  {
    path: 'employees',
    loadComponent: () => {
      return import('./employees/employees').then((m) => m.Employees);
    },
  },
  {
    path: 'company',
    loadComponent: () => {
      return import('./company/company').then((m) => m.Company);
    },
  },
];
