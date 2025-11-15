import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ManagerService } from '../../../services/api/manager/manager';
import { Task } from '../../../services/model/task';

@Component({
  selector: 'app-taskseachproject',
  imports: [CommonModule],
  templateUrl: './taskseachproject.html',
  styleUrl: './taskseachproject.css',
})
export class Taskseachproject {
  projectId = 0;
  tasks: Task[] = [];
  constructor(
    private route: ActivatedRoute,
    private managerService: ManagerService
  ) {}

  ngOnInit(): void {
    this.projectId = Number(this.route.snapshot.paramMap.get('id'));
    this.getTasksByProjectId();
    // console.log('Project ID:', this.projectId);
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

  appear: boolean = false;

  toggleAppear() {
    this.appear = !this.appear;
  }
}
