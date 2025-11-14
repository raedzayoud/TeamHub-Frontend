import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-menumanager',
  imports: [RouterLink],
  templateUrl: './menumanager.html',
  styleUrl: './menumanager.css',
})
export class Menumanager {
  constructor(private router: Router) {}
  isMenuActive = false;

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }

  goToLogin() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
