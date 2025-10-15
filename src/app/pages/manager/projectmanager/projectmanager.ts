import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projectmanager',
  imports: [RouterLink],
  templateUrl: './projectmanager.html',
  styleUrl: './projectmanager.css',
})
export class Projectmanager {
  constructor(private router: Router) {}

  gotoTask() {
    this.router.navigate(['/managerdashboard/taskseachproject']);
  }
}
