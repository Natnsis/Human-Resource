import { Injectable } from '@angular/core';
import { CandidateModel } from '../../models/candidate.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApplyingService {
  private candidates: CandidateModel[] = [];
  private candidatesSubject = new BehaviorSubject<CandidateModel[]>(
    this.candidates
  );
  candidates$ = this.candidatesSubject.asObservable();

  getAll() {
    return this.candidates;
  }

  addCandidate(candidate: CandidateModel) {
    this.candidates.push(candidate);
    this.candidatesSubject.next([...this.candidates]);
  }

  removeCandidate(email: string) {
    this.candidates = this.candidates.filter((c) => c.email !== email);
    this.candidatesSubject.next([...this.candidates]);
  }
}
