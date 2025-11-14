import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ManagerService } from '../../../services/api/manager/manager';

@Component({
  selector: 'app-overviewmanager',
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './overviewmanager.html',
  styleUrl: './overviewmanager.css',
  standalone: true,
})
export class Overviewmanager implements OnInit {
  isShown: boolean = false;
  projectForm!: FormGroup;

  constructor(private fb: FormBuilder, private mangerService: ManagerService) {}

  ngOnInit(): void {
    this.projectForm = this.fb.group({
      projectName: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  onSubmit() {
    if (this.projectForm.invalid) {
      this.projectForm.markAllAsTouched();
      return;
    }

    const projectName = this.projectForm.get('projectName')?.value;

    this.mangerService.createProject(projectName).subscribe({
      next: (response) => {
        console.log('Project created successfully:', (response as any).success);
      },
      error: (error) => {
        console.error('Error creating project:', error);
      },
    });
  }

  toggleShow() {
    this.isShown = !this.isShown;
  }
}
