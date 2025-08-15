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
    const Department: DepartmentModel[] = [
      { employeeId: 1, departmentName: 'ui/ux' },
      { employeeId: 2, departmentName: 'frontEnd' },
      { employeeId: 3, departmentName: 'Human resource' },
      { employeeId: 3, departmentName: 'full stack' },
    ];

    const Candidate: CandidateModel[] = [
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

    const Employee: EmployeeModel[] = [
      {
        id: 1,
        name: 'natnael',
        email: 'nsisay49@gmail.com',
        department: 'fullStack',
        salary: 1000,
        password: '234',
      },
      {
        id: 1,
        name: 'natnael',
        email: 'nsisay49@gmail.com',
        department: 'fullStack',
        salary: 1000,
        password: '234',
      },
      {
        id: 1,
        name: 'natnael',
        email: 'nsisay49@gmail.com',
        department: 'fullStack',
        salary: 1000,
        password: '234',
      },
      {
        id: 1,
        name: 'natnael',
        email: 'nsisay49@gmail.com',
        department: 'fullStack',
        salary: 1000,
        password: '234',
      },
    ];
    const LeaveRequest: LeaveRequestModel[] = [
      {
        name: 'natnael',
        position: 'full stack dev',
        letter: 'i need to get some air',
      },
      {
        name: 'natnael',
        position: 'full stack dev',
        letter: 'i need to get some air',
      },
      {
        name: 'natnael',
        position: 'full stack dev',
        letter: 'i need to get some air',
      },
      {
        name: 'natnael',
        position: 'full stack dev',
        letter: 'i need to get some air',
      },
    ];
  }
}
