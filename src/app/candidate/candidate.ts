import { Component } from '@angular/core';
import { CandidateTable } from '../components/candidate-table/candidate-table';

@Component({
  selector: 'app-candidate',
  imports: [CandidateTable],
  templateUrl: './candidate.html',
  styleUrl: './candidate.css'
})
export class Candidate {

}
