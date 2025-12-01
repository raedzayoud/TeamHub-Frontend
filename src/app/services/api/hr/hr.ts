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

  getAllManagers() {
    const managers = this.baseUrl + `v1/hr/Managers`;
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
    return this.http.get(managers, { headers: headers });
  }

  getAllDeveloperWithoutManager() {
    const managers = this.baseUrl + `v1/hr/developers/without-manager`;
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
    return this.http.get(managers, { headers: headers });
  }

  affectManagerToDeveloper(developerId: number, managerId: number) {
    const url =
      this.baseUrl + `v1/hr/affecteManager/${developerId}/manager/${managerId}`;
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
    return this.http.put(url, {}, { headers: headers });
  }

  getSumSalary() {
    const url = this.baseUrl + `v1/hr/api/salary/total`;
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
    return this.http.get(url, { headers: headers });
  }

  getAverageSalary() {
    const url = this.baseUrl + `v1/hr/api/salary/average`;
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
    return this.http.get(url, { headers: headers });
  }
}
