import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { LeaveRequestModel } from '../models/leave.model';
import { LeaveRequestService } from '../services/InnerServices/leave-request.service';
import { Header } from '../components/header/header';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.html',
  styleUrls: ['./requests.css'],
  standalone: true,
  imports: [Header, ReactiveFormsModule, MatTableModule, MatButtonModule],
})
export class RequestsComponent implements OnInit {
  displayedColumns: string[] = [
    'position',
    'name',
    'positionTitle',
    'letter',
    'status',
    'action',
  ];
  dataSource: LeaveRequestModel[] = [];
  searchControl = new FormControl('');

  constructor(private leaveService: LeaveRequestService) {}

  ngOnInit() {
    this.dataSource = this.leaveService.getAll();

    this.searchControl.valueChanges.subscribe((value) => {
      const search = (value ?? '').toLowerCase();
      this.dataSource = this.leaveService
        .getAll()
        .filter(
          (item) =>
            item.name.toLowerCase().includes(search) ||
            item.position.toLowerCase().includes(search) ||
            item.letter.toLowerCase().includes(search)
        );
    });
  }

  toggleStatus(request: LeaveRequestModel) {
    this.leaveService.toggleStatus(request);
  }

  getStatusText(request: LeaveRequestModel) {
    return request.isAccepted ? 'Accepted' : 'Rejected';
  }

  getButtonClass(request: LeaveRequestModel) {
    return request.isAccepted
      ? 'bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded'
      : 'bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded';
  }
}
