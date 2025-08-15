import { Injectable } from '@angular/core';
import { InMemoryDataService } from '../in-memory-data.service';
import { LeaveRequestModel } from '../../models/leave.model';

@Injectable({
  providedIn: 'root',
})
export class LeaveRequestService {
  private leaveRequests: LeaveRequestModel[];

  constructor(private inMemoryService: InMemoryDataService) {
    const db = this.inMemoryService.createDb();
    this.leaveRequests = db.leave.map((leave, index) => ({
      ...leave,
      positionIndex: index + 1,
    }));
  }

  getAll() {
    return this.leaveRequests;
  }

  toggleStatus(request: LeaveRequestModel) {
    request.isAccepted = !request.isAccepted;
  }
}
