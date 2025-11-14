import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../../services/api/manager/manager';
import { DeveloperManager } from '../../../services/model/developerManager';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teamsmanger',
  imports: [CommonModule],
  templateUrl: './teamsmanger.html',
  styleUrl: './teamsmanger.css',
})
export class Teamsmanger implements OnInit {
  developer: DeveloperManager[] = [];

  constructor(private managerService: ManagerService) {}

  ngOnInit(): void {
    this.getAllDeveloperByManagerId();
  }

  getAllDeveloperByManagerId() {
    const managerId = Number(localStorage.getItem('idManager'));

    this.managerService.getAllDevelopersByManager(managerId).subscribe({
      next: (response: any) => {
        this.developer = response.developers.map((dev: any) => ({
          nameDeveloper: dev.name,
          emailDeveloper: dev.email,
        }));
        console.log('Developers fetched:', this.developer);
      },
      error: (error) => {
        console.error('Error fetching developers:', error);
      },
    });
  }
}
