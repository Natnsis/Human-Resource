import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LeaveRequestService } from '../../services/InnerServices/leave-request.service';
import { LeaveRequestModel } from '../../models/leave.model';

@Component({
  selector: 'app-role-employee',
  standalone: true,
  imports: [
    RouterLink,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
  ],
  templateUrl: './role-employee.html',
})
export class RoleEmployee {
  name = '';
  position = '';
  letter = '';

  constructor(private leaveService: LeaveRequestService) {}

  submitLeaveRequest() {
    // Validate form fields
    if (!this.name.trim() || !this.position.trim() || !this.letter.trim()) {
      alert('Please fill in all fields.');
      return;
    }

    // Create new leave request
    const newRequest: LeaveRequestModel = {
      name: this.name.trim(),
      position: this.position.trim(),
      letter: this.letter.trim(),
      isAccepted: false, // default
    };

    // Add to the service array
    this.leaveService.getAll().push(newRequest);

    // Reset form fields
    this.name = '';
    this.position = '';
    this.letter = '';

    alert('Leave request submitted successfully!');
  }
}
