import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-employeehr',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './employeehr.html',
  styleUrls: ['./employeehr.css'],
})
export class Employeehr {
  isAppear = false;
  employeeForm: FormGroup;

  employees = [
    {
      initials: 'SJ',
      name: 'Sarah Johnson',
      role: 'Senior Developer',
      department: 'Engineering',
      status: 'Active',
    },
    {
      initials: 'MC',
      name: 'Michael Chen',
      role: 'Product Manager',
      department: 'Product',
      status: 'Active',
    },
    {
      initials: 'ED',
      name: 'Emma Davis',
      role: 'UX Designer',
      department: 'Design',
      status: 'Active',
    },
    {
      initials: 'JW',
      name: 'James Wilson',
      role: 'DevOps Engineer',
      department: 'Engineering',
      status: 'Active',
    },
  ];

  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      salary: ['', Validators.required, Validators.min(0)],
    });
  }

  showForm() {
    this.isAppear = true;
  }

  closeIfOutSide(event: MouseEvent) {
    this.isAppear = false;
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      const newEmp = {
        initials: this.getInitials(this.employeeForm.value.name),
        name: this.employeeForm.value.name,
        role: 'New Employee',
        department: 'Unassigned',
        status: 'Active',
      };
      this.employees.push(newEmp);
      this.employeeForm.reset();
      this.isAppear = false;
    }
  }

  private getInitials(name: string): string {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  }
}
