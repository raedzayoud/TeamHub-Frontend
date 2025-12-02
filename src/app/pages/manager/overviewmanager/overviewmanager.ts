import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ManagerService } from '../../../services/api/manager/manager';
import { TaskCount } from '../../../services/model/taskCount';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-overviewmanager',
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './overviewmanager.html',
  styleUrl: './overviewmanager.css',
  standalone: true,
})
export class Overviewmanager implements OnInit {
  isShown = false;
  projectForm!: FormGroup;

  taskCounts: TaskCount = {
    todo: 0,
    inprogress: 0,
    done: 0,
  };

  sumTask = 0;

  constructor(
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private mangerService: ManagerService
  ) {}

  ngOnInit(): void {
    this.projectForm = this.fb.group({
      projectName: ['', [Validators.required, Validators.minLength(3)]],
    });

    this.getTaskTypeCount();
  }

  onSubmit(): void {
    if (this.projectForm.invalid) {
      this.projectForm.markAllAsTouched();
      return;
    }

    const projectName = this.projectForm.get('projectName')?.value;

    this.mangerService.createProject(projectName).subscribe({
      next: (response) => {
        this.snackBar.open('Project created successfully', 'Close', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
        console.log('Project created successfully:', (response as any).success);
        this.toggleShow();
      },
      error: (error) => {
        console.error('Error creating project:', error);
      },
    });
  }

  getTaskTypeCount(): void {
    this.mangerService.getAllDifferentTasksStatus().subscribe({
      next: (data: any) => {
        this.taskCounts = data.counts;

        this.sumTask =
          this.taskCounts.todo +
          this.taskCounts.inprogress +
          this.taskCounts.done;

        console.log('Task counts fetched:', this.taskCounts);
      },
      error: (error) => {
        console.error('Error fetching task counts:', error);
      },
    });
  }

  toggleShow(): void {
    this.isShown = !this.isShown;
  }
}
