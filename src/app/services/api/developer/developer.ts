import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DeveloperService {
  baseUrl: string = 'http://127.0.0.1:8080/api/';

  constructor(private http: HttpClient) {}

  getTask(idDeveloper: number) {
    const createTaskUrl =
      this.baseUrl + `v1/developer/taskstodo/${idDeveloper}`;
    const token = localStorage.getItem('token') || '';

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
    return this.http.get(createTaskUrl, { headers: headers });
  }

  getDetailsDeveloper() {
    const getDetails = this.baseUrl + `v1/developer/details`;
    const token = localStorage.getItem('token') || '';

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
    return this.http.get(getDetails, { headers: headers });
  }

  getSalary() {
    const getSalary =
      this.baseUrl +
      `v1/developer/${Number(localStorage.getItem('idDeveloper'))}`;
    const token = localStorage.getItem('token') || '';

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
    return this.http.get(getSalary, { headers: headers });
  }

  getTaskType(idDeveloper: number) {
    const getTaskTypeUrl =
      this.baseUrl + `v1/developer/tasktype/${idDeveloper}`;

    const token = localStorage.getItem('token') || '';

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
    return this.http.get(getTaskTypeUrl, { headers: headers });
  }
}
