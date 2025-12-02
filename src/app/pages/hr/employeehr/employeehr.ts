import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HrService } from '../../../services/api/hr/hr';
import { DeveloperHr } from '../../../services/model/developerHr';
import { ManagerHr } from '../../../services/model/managerhr';
import { DeveloperHrWithoutManager } from '../../../services/model/developerhrwithoutmanager';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-employeehr',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './employeehr.html',
  styleUrls: ['./employeehr.css'],
})
export class Employeehr implements OnInit {
  isAppear = false;
  employeeForm: FormGroup;
  affectForm: FormGroup;
  isAffectAppear: boolean = false;

  managers: ManagerHr[] = [];
  employees: DeveloperHr[] = [];
  employeeHrWithoutManager: DeveloperHrWithoutManager[] = [];

  constructor(
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private hrService: HrService
  ) {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      salary: ['', [Validators.required, Validators.min(0)]],
    });
    this.affectForm = this.fb.group({
      developerName: ['', Validators.required],
      managerName: ['', Validators.required],
    });
  }

  // get developer without manager
  getAllDeveloperWithoutManager() {
    this.hrService.getAllDeveloperWithoutManager().subscribe(
      (data: any) => {
        this.employeeHrWithoutManager = data;
      },
      (error: any) => console.error('Error fetching managers:', error)
    );
  }

  showformAffect() {
    this.isAffectAppear = true;
  }

  // get Manager for developer without manager
  getAllManagers() {
    this.hrService.getAllManagers().subscribe(
      (data: any) => {
        this.managers = data.managers;
      },
      (error: any) => console.error('Error fetching managers:', error)
    );
  }

  ngOnInit(): void {
    this.getAllDevelopers();
    this.getAllManagers();
    this.getAllDeveloperWithoutManager();
  }

  getAllDevelopers() {
    this.hrService.getAllDeveloper().subscribe(
      (data: any) => {
        this.employees = data.developers;
      },
      (error) => console.error('Error fetching developers:', error)
    );
  }

  onAffectSubmit() {
    if (this.affectForm.invalid) {
      this.affectForm.markAllAsTouched();
      return;
    }

    const developerId = this.affectForm.value.developerName; // this returns the ID
    const managerId = this.affectForm.value.managerName; // this returns the ID

    this.hrService.affectManagerToDeveloper(developerId, managerId).subscribe({
      next: (response) => {
        // add sncackbar here
        this.snackBar.open('Manager affected successfully', 'Close', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
        console.log('Manager affected successfully:', response);
        this.getAllDevelopers();
        this.affectForm.reset();
        this.isAffectAppear = false;
      },
      error: (error) => {
        console.error('Error affecting manager:', error);
      },
    });
  }

  showForm() {
    this.isAppear = true;
  }

  closeIfOutSide(event: MouseEvent) {
    this.isAppear = false;
  }
  closeAffectModal(event: MouseEvent) {
    this.isAffectAppear = false;
  }

  onSubmit() {
    if (this.employeeForm.invalid) {
      this.employeeForm.markAllAsTouched();
      return;
    }

    const { name, email, salary, password } = this.employeeForm.value;

    this.hrService.addEmployee(name, email, salary, password).subscribe(
      (response) => {
        this.snackBar.open('Employee added successfully', 'Close', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
        console.log('Employee added successfully:', response);
        this.getAllDevelopers();
        this.employeeForm.reset();
        this.isAppear = false;
      },
      (error) => {
        console.error('Error adding employee:', error);
      }
    );
  }

  searchEmployee(query: string) {
    if (!query) {
      this.getAllDevelopers();
      return;
    }

    this.hrService.searchEmployee(query).subscribe(
      (data: any) => {
        this.employees = data.developers;
      },
      (error) => console.error('Error searching employee:', error)
    );
  }

  private getInitials(name: string): string {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  }
}
