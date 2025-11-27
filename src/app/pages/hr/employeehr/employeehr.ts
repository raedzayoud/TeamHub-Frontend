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

  employees: DeveloperHr[] = [];

  constructor(private fb: FormBuilder, private hrService: HrService) {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      salary: ['', [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {
    this.getAllDevelopers();
  }

  getAllDevelopers() {
    this.hrService.getAllDeveloper().subscribe(
      (data: any) => {
        this.employees = data.developers;
      },
      (error) => console.error('Error fetching developers:', error)
    );
  }

  showForm() {
    this.isAppear = true;
  }

  closeIfOutSide(event: MouseEvent) {
    this.isAppear = false;
  }

  onSubmit() {
    if (this.employeeForm.invalid) {
      this.employeeForm.markAllAsTouched();
      return;
    }

    const { name, email, salary, password } = this.employeeForm.value;

    this.hrService.addEmployee(name, email, salary, password).subscribe(
      (response) => {
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
