import { Injectable } from '@angular/core';
import { CandidateModel } from '../../models/candidate.model';



@Injectable({
  providedIn: 'root',
})
export class ApplyingService {
  private candidates: CandidateModel[] = [];

  getAll() {
    return this.candidates;
  }

  addCandidate(candidate: CandidateModel) {
    this.candidates.push(candidate);
  }
}
