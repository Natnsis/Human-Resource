import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = 'api/employee';

  constructor(private http: HttpClient) {}

  getAll(): Observable<EmployeeModel[]> {
    return this.http.get<EmployeeModel[]>(this.apiUrl);
  }

  getById(id: number): Observable<EmployeeModel> {
    return this.http.get<EmployeeModel>(`${this.apiUrl}/${id}`);
  }

  add(employee: EmployeeModel): Observable<EmployeeModel> {
    return this.http.post<EmployeeModel>(this.apiUrl, employee);
  }

  update(employee: EmployeeModel): Observable<any> {
    return this.http.put(`${this.apiUrl}/${employee.id}`, employee);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
