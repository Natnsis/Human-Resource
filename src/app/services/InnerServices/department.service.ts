import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DepartmentModel } from '../../models/department.model';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  private apiUrl = 'api/department';
  constructor(private http: HttpClient) {}

  getAll(): Observable<DepartmentModel[]> {
    return this.http.get<DepartmentModel[]>(this.apiUrl);
  }

  getById(employeeId: number): Observable<DepartmentModel[]> {
    return this.http.get<DepartmentModel[]>(`${this.apiUrl}/${employeeId}`);
  }

  update(department: DepartmentModel): Observable<any> {
    return this.http.put(`${this.apiUrl}/${department.employeeId}`, department);
  }
}
