import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ApplyingService } from '../../services/InnerServices/applying.service';
import { RouterLink } from '@angular/router';
import { CandidateModel } from '../../models/candidate.model';

@Component({
  selector: 'app-candidate',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    RouterLink,
  ],
  templateUrl: './candidate.html',
})
export class Candidate {
  candidateForm: FormGroup;
  selectedFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    private applyingService: ApplyingService,
    private snackBar: MatSnackBar
  ) {
    this.candidateForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      position: ['', Validators.required],
      degree: ['', Validators.required],
    });
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  submitApplication() {
    if (this.candidateForm.invalid) {
      this.snackBar.open('Please fill in all fields correctly.', 'Close', {
        duration: 3000,
      });
      return;
    }

    const candidate: CandidateModel = {
      ...this.candidateForm.value,
    };

    this.applyingService.addCandidate(candidate);
    this.snackBar.open('Candidate applied successfully!', 'Close', {
      duration: 3000,
    });
    this.candidateForm.reset();
    this.selectedFile = null;
  }
}
