import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, MatSnackBarModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login implements OnInit {
  loading = false;
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  login() {
    if (this.loginForm.invalid) {
      this.snackBar.open('Please fill in all fields correctly.', 'Close', {
        duration: 3000,
        verticalPosition: 'top',
        panelClass: ['error-snackbar'],
      });
      return;
    }

    this.loading = true;

    const { email, password } = this.loginForm.value;
    this.authService.login(email, password).subscribe({
      next: (response: any) => {
        this.loading = false;

        // ✅ Handle successful login
        localStorage.setItem('token', response.token);
        localStorage.setItem('role', response.role);

        if (response.role === 'MANAGER') {
          this.router.navigate(['/managerdashboard']);
        } else if (response.role === 'HR') {
          this.router.navigate(['/hrdashboard']);
        } else {
          this.router.navigate(['/developer']);
        }

        this.snackBar.open('✅ Login successful!', 'Close', {
          duration: 2000,
          verticalPosition: 'top',
          panelClass: ['success-snackbar'],
        });
      },

      error: (error) => {
        this.loading = false;
        console.error('Error Response:', error);

        // ✅ Show backend error message
        const message =
          error?.error?.message || 'Login failed. Please try again.';

        this.snackBar.open(message, 'Close', {
          duration: 3000,
          verticalPosition: 'top',
          panelClass: ['error-snackbar'],
        });
      },
    });
  }
}
