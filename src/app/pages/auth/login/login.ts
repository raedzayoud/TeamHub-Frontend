import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/api/auth/auth';
import { ManagerService } from '../../../services/api/manager/manager';

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
    private router: Router,
    private managerService: ManagerService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  login() {
    if (this.loginForm.invalid) {
      this.snackBar.open('Please fill all fields correctly.', 'Close', {
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

        localStorage.setItem('token', response.token);
        localStorage.setItem('role', response.role);

        if (response.role === 'MANAGER') {
          this.managerService.getDetailsInfoManager().subscribe({
            next: (data: any) => {
              const manager = data.detailsManager;
              localStorage.setItem('emailmanager', manager.email || '');
              localStorage.setItem('idManager', manager.idManager.toString());
              localStorage.setItem('idUser', manager.idUser.toString());
              localStorage.setItem('nameManager', manager.name || '');
              this.router.navigate(['/managerdashboard']);
            },
            error: () => {
              this.snackBar.open('Failed to load manager info.', 'Close', {
                duration: 3000,
                verticalPosition: 'top',
                panelClass: ['error-snackbar'],
              });
            },
          });
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
