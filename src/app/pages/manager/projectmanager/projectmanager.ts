import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { ManagerService } from '../../../services/api/manager/manager';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-projectmanager',
  imports: [RouterLink, NgFor],
  templateUrl: './projectmanager.html',
  styleUrl: './projectmanager.css',
})
export class Projectmanager implements OnInit {
  projects: String[] = [];
  constructor(private router: Router, private managerService: ManagerService) {}

  ngOnInit(): void {
    this.getProjectsByManager();
  }

  gotoTask() {
    this.router.navigate(['/managerdashboard/taskseachproject']);
  }

  getProjectsByManager() {
    this.managerService
      .getAllProjectsByManager(Number(localStorage.getItem('idManager')))
      .subscribe({
        next: (data: any) => {
          this.projects = data.projects.map((p: any) => p.name);
        },
        error: (err) => {
          console.error('Error fetching projects:', err);
        },
      });
  }
}
