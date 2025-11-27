import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HrService {
  baseUrl: string = 'http://127.0.0.1:8080/api/';

  constructor(private http: HttpClient) {}

  getAllDeveloper() {
    const employees = this.baseUrl + `v1/hr/developers`;
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
    return this.http.get(employees, { headers: headers });
  }

  searchEmployee(query: string) {
    const employees = this.baseUrl + `v1/hr/developers/${query}`;
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
    return this.http.get(employees, { headers: headers });
  }

  addEmployee(name: string, email: string, salary: number, password: string) {
    const employees = this.baseUrl + `v1/hr/createDeveloper`;
    const token = localStorage.getItem('token') || '';
    const body = {
      name: name,
      email: email,
      salary: salary,
      password: password,
    };
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
    return this.http.post(employees, body, { headers: headers });
  }
}
