import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Menudeveloper } from '../menudeveloper/menudeveloper';

@Component({
  selector: 'app-leavedeveloper',
  standalone: true, // ✅ must come before imports (best practice)
  imports: [Menudeveloper, NgIf, ReactiveFormsModule],
  templateUrl: './leavedeveloper.html',
  styleUrls: ['./leavedeveloper.css'],
})
export class Leavedeveloper {
  isAppear = false;
  leaveForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.leaveForm = this.fb.group({
      leaveType: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      reason: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  onSubmit() {
    console.log('Form submission triggered');
    if (this.leaveForm.valid) {
      alert('Leave request submitted successfully!');
      this.leaveForm.reset();
      this.isAppear = false;
    } else {
      // 👇 This ensures all empty fields show red + errors immediately
      this.leaveForm.markAllAsTouched();
    }
  }

  toggleAppear() {
    this.isAppear = !this.isAppear;
  }

  closeIfOutSide(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('add-leave-container')) {
      this.isAppear = false;
    }
  }
}
