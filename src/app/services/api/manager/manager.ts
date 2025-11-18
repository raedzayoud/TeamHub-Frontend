import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ManagerService {
  baseUrl: string = 'http://127.0.0.1:8080/api/';

  constructor(private http: HttpClient) {}

  getAllProjectsByManager(managerId: number) {
    const projectManager = this.baseUrl + `v1/manager/${managerId}`;
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
    return this.http.get(projectManager, { headers: headers });
  }

  getDetailsInfoManager() {
    const managerInfo = this.baseUrl + 'v1/manager/details';
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
    return this.http.get(managerInfo, { headers: headers });
  }

  createProject(nameProject: string) {
    const createProjectUrl = this.baseUrl + 'v1/project/';
    const token = localStorage.getItem('token') || '';
    const body = {
      name: nameProject,
      id_manager: localStorage.getItem('idManager'),
    };
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
    return this.http.post(createProjectUrl, body, { headers: headers });
  }

  getAllDevelopersByManager(managerId: number) {
    const developersManager =
      this.baseUrl + 'v1/manager/developers/' + managerId;
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
    return this.http.get(developersManager, { headers: headers });
  }

  geTasksByProjectId(projectId: number) {
    const tasksByProjectUrl = this.baseUrl + `v1/task/projet/${projectId}`;
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
    return this.http.get(tasksByProjectUrl, { headers: headers });
  }

  getAllDifferentTasksStatus() {
    const tasksStatusUrl =
      this.baseUrl + `v1/manager/counts/${localStorage.getItem('idManager')}`;
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
    return this.http.get(tasksStatusUrl, { headers: headers });
  }

  createTask(name: string, idDeveloper: number, idProject: number) {
    const createTaskUrl = this.baseUrl + 'v1/task/';
    const token = localStorage.getItem('token') || '';

    const body = {
      name: name,
      idDeveloper: idDeveloper,
      status: 'TODO',
      idProject: idProject,
    };

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    return this.http.post(createTaskUrl, body, { headers: headers });
  }
}
