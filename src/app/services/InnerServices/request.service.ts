import { Injectable } from '@angular/core';
import { CandidateModel } from '../../models/candidate.model';
import { EmployeeModel } from '../../models/employee.model';
import { InMemoryDataService } from '../in-memory-data.service';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  private candidates: CandidateModel[] = [];
  private employees: EmployeeModel[] = [];

  constructor(private db: InMemoryDataService) {
    const database = this.db.createDb();
    this.candidates = [...database.candidate];
    this.employees = [...database.employee];
  }

  /** Get all candidates */
  getCandidates(): CandidateModel[] {
    return [...this.candidates];
  }

  /** Accept a candidate → move to employees */
  acceptCandidate(index: number): void {
    const candidate = this.candidates[index];
    if (!candidate) return;

    const newEmployee: EmployeeModel = {
      id: this.db.genId(this.employees),
      name: candidate.name,
      email: candidate.email,
      department: candidate.position,
      salary: 0,
      password: 'default123',
    };

    this.employees.push(newEmployee);
    this.candidates.splice(index, 1);
  }

  rejectCandidate(index: number): void {
    if (this.candidates[index]) {
      this.candidates.splice(index, 1);
    }
  }
}
