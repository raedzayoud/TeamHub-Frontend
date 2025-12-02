import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ManagerService } from '../../../services/api/manager/manager';
import { Task } from '../../../services/model/task';
import { DeveloperManager } from '../../../services/model/developerManager';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  idDeveloper: any = '';
  developer: DeveloperManager[] = [];

  constructor(
    private route: ActivatedRoute,
    private managerService: ManagerService,
    private snackBar: MatSnackBar
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
    // Validation
    if (!this.idDeveloper || this.idDeveloper === '') {
      alert('Please select a developer');
      return;
    }

    if (!this.nameTask || this.nameTask.trim() === '') {
      alert('Please enter a task name');
      return;
    }

    this.managerService
      .createTask(this.nameTask, this.idDeveloper, this.projectId)
      .subscribe({
        next: (data: any) => {
          this.snackBar.open('Task created successfully', 'Close', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
          });
          console.log('Task created successfully:', data);
          this.getTasksByProjectId();
          this.resetForm();
          this.toggleAppear();
        },
        error: (err) => {
          console.error('Error creating task:', err);
          alert('Failed to create task. Please try again.');
          // this.resetForm();
        },
      });
  }

  resetForm() {
    this.nameTask = '';
    this.idDeveloper = '';
  }

  toggleAppear() {
    this.appear = !this.appear;
  }
}
