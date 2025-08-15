import { Component } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ErrorStateMatcher } from '@angular/material/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common'; // <-- Add this
import { ApplyingService } from '../../services/InnerServices/applying.service';
import { CandidateModel } from '../../models/candidate.model';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: any): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-candidate',
  standalone: true,
  imports: [
    CommonModule, // <-- Add this
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './candidate.html',
})
export class Candidate {
  nameFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  positionFormControl = new FormControl('', [Validators.required]);
  degreeFormControl = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();

  constructor(private applyingService: ApplyingService) {}

  submitApplication() {
    if (
      this.nameFormControl.invalid ||
      this.emailFormControl.invalid ||
      this.positionFormControl.invalid ||
      this.degreeFormControl.invalid
    ) {
      alert('Please fill all fields correctly.');
      return;
    }

    const newCandidate: CandidateModel = {
      name: this.nameFormControl.value!,
      email: this.emailFormControl.value!,
      position: this.positionFormControl.value!,
      degree: this.degreeFormControl.value!,
    };

    this.applyingService.addCandidate(newCandidate);

    this.nameFormControl.reset();
    this.emailFormControl.reset();
    this.positionFormControl.reset();
    this.degreeFormControl.reset();

    alert('Application submitted successfully!');
  }

  onFileSelected(event: Event) {
    // File input is visual only
  }
}
