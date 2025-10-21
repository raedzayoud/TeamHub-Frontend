import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { ManagerService } from '../../../services/manager/manager';

@Component({
  selector: 'app-projectmanager',
  imports: [RouterLink],
  templateUrl: './projectmanager.html',
  styleUrl: './projectmanager.css',
})
export class Projectmanager {
  constructor(private router: Router, private managerService: ManagerService) {}

  gotoTask() {
    this.router.navigate(['/managerdashboard/taskseachproject']);
  }

  getProjectsByManager() {}
}
