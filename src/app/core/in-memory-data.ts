import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { EmployeeModel } from '../models/employee.model';

@Injectable({ providedIn: 'root' })
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const employees: EmployeeModel[] = [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@company.com',
        department: 'Engineering',
        salary: 1200,
        password: 'secret1',
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane@company.com',
        department: 'Design',
        salary: 1100,
        password: 'secret2',
      },
      {
        id: 3,
        name: 'Sam Lee',
        email: 'sam@company.com',
        department: 'HR',
        salary: 900,
        password: 'secret3',
      },
    ];
    return { employees };
  }

  genId(collection: { id: number }[]): number {
    return collection.length ? Math.max(...collection.map((e) => e.id)) + 1 : 1;
  }
}
