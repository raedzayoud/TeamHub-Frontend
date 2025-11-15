import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { ManagerService } from '../../../services/api/manager/manager';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projectmanager',
  imports: [RouterLink, CommonModule],
  templateUrl: './projectmanager.html',
  styleUrl: './projectmanager.css',
})
export class Projectmanager implements OnInit {
  projects: { id: number; name: string }[] = [];

  constructor(private router: Router, private managerService: ManagerService) {}

  ngOnInit(): void {
    this.getProjectsByManager();
  }

  gotoTask(projectId: number) {
    this.router.navigate(['/managerdashboard/taskseachproject', projectId]);
  }

  getProjectsByManager() {
    this.managerService
      .getAllProjectsByManager(Number(localStorage.getItem('idManager')))
      .subscribe({
        next: (data: any) => {
          this.projects = data.projects.map((p: any) => ({
            id: p.id,
            name: p.name,
          }));
        },
        error: (err) => {
          console.error('Error fetching projects:', err);
        },
      });
  }
}
