import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ManagerService } from '../../../services/api/manager/manager';
import { Task } from '../../../services/model/task';
import { DeveloperManager } from '../../../services/model/developerManager';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-taskseachproject',
  imports: [CommonModule, FormsModule],
  templateUrl: './taskseachproject.html',
  styleUrl: './taskseachproject.css',
})
export class Taskseachproject {
  projectId = 0;
  appear = false;

  tasks: Task[] = [];
  nameTask = '';
  idDeveloper = 0;

  developer: DeveloperManager[] = [];

  constructor(
    private route: ActivatedRoute,
    private managerService: ManagerService
  ) {}

  ngOnInit(): void {
    this.projectId = Number(this.route.snapshot.paramMap.get('id'));
    this.getTasksByProjectId();
    this.getAllDeveloperByManagerId();
  }

  getTasksByProjectId() {
    this.managerService.geTasksByProjectId(this.projectId).subscribe({
      next: (data: any) => {
        this.tasks = data.tasks;
      },
      error: (err) => {
        console.error('Error fetching tasks:', err);
      },
    });
  }

  getAllDeveloperByManagerId() {
    const managerId = Number(localStorage.getItem('idManager'));

    this.managerService.getAllDevelopersByManager(managerId).subscribe({
      next: (response: any) => {
        this.developer = response.developers.map((dev: any) => ({
          id: dev.id,
          nameDeveloper: dev.name,
          emailDeveloper: dev.email,
        }));
      },
      error: (error) => {
        console.error('Error fetching developers:', error);
      },
    });
  }

  createTask() {
    console.log('Creating task with name:', this.nameTask);
    console.log('Assigning to developer ID:', this.idDeveloper);
    console.log('For project ID:', this.projectId);
    this.managerService
      .createTask(this.nameTask, this.idDeveloper, this.projectId)
      .subscribe({
        next: (data: any) => {
          console.log('Task created successfully:', data);
        },
        error: (err) => {
          console.error('Error creating task:', err);
        },
      });
  }

  toggleAppear() {
    this.appear = !this.appear;
  }
}
