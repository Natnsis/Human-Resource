import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../models/employee.model';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private apiUrl = 'api/employees';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getAll(): Observable<EmployeeModel[]> {
    return this.http.get<EmployeeModel[]>(this.apiUrl);
  }

  getById(id: number): Observable<EmployeeModel> {
    return this.http.get<EmployeeModel>(`${this.apiUrl}/${id}`);
  }

  create(employee: Omit<EmployeeModel, 'id'>): Observable<EmployeeModel> {
    return this.http.post<EmployeeModel>(
      this.apiUrl,
      employee,
      this.httpOptions
    );
  }

  update(employee: EmployeeModel): Observable<EmployeeModel> {
    return this.http.put<EmployeeModel>(
      `${this.apiUrl}/${employee.id}`,
      employee,
      this.httpOptions
    );
  }

  delete(id: number): Observable<unknown> {
    return this.http.delete(`${this.apiUrl}/${id}`, this.httpOptions);
  }
}
