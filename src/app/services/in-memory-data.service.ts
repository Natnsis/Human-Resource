import { Injectable } from '@angular/core';
import { DepartmentModel } from '../models/department.model';
import { CandidateModel } from '../models/candidate.model';
import { EmployeeModel } from '../models/employee.model';
import { LeaveRequestModel } from '../models/leave.model';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService {
  createDb() {
    const department: DepartmentModel[] = [
      { employeeId: 1, departmentName: 'ui/ux' },
      { employeeId: 2, departmentName: 'frontEnd' },
      { employeeId: 3, departmentName: 'Human resource' },
      { employeeId: 3, departmentName: 'full stack' },
    ];

    const candidate: CandidateModel[] = [
      {
        name: 'natnael',
        email: 'nsisay49@gmail.com',
        position: 'angular dev',
        degree: 'computer Science',
      },
      {
        name: 'natnael',
        email: 'nsisay49@gmail.com',
        position: 'angular dev',
        degree: 'computer Science',
      },
      {
        name: 'natnael',
        email: 'nsisay49@gmail.com',
        position: 'angular dev',
        degree: 'computer Science',
      },
      {
        name: 'natnael',
        email: 'nsisay49@gmail.com',
        position: 'angular dev',
        degree: 'computer Science',
      },
    ];

    const employee: EmployeeModel[] = [
      {
        id: 1,
        name: 'natnael',
        email: 'nsisay49@gmail.com',
        department: 'fullStack',
        salary: 1000,
        password: '234',
      },
      {
        id: 2,
        name: 'natnael',
        email: 'nsisay49@gmail.com',
        department: 'fullStack',
        salary: 1000,
        password: '234',
      },
      {
        id: 3,
        name: 'natnael',
        email: 'nsisay49@gmail.com',
        department: 'fullStack',
        salary: 1000,
        password: '234',
      },
      {
        id: 4,
        name: 'natnael',
        email: 'nsisay49@gmail.com',
        department: 'fullStack',
        salary: 1000,
        password: '234',
      },
    ];

    const leave: LeaveRequestModel[] = [
      {
        name: 'natnael',
        position: 'full stack dev',
        letter: 'i need to get some air',
        isAccepted: false,
      },
      {
        name: 'abrham',
        position: 'full stack dev',
        letter: 'i need to get some air',
        isAccepted: false,
      },
      {
        name: 'abiyu',
        position: 'full stack dev',
        letter: 'i need to get some air',
        isAccepted: false,
      },
      {
        name: 'alemu',
        position: 'full stack dev',
        letter: 'i need to get some air',
        isAccepted: false,
      },
    ];

    return { leave, employee, department, candidate };
  }

  genId(employees: EmployeeModel[]): number {
    return employees.length > 0
      ? Math.max(...employees.map((emp) => emp.id)) + 1
      : 1;
  }
}
