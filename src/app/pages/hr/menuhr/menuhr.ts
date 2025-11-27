import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menuhr',
  imports: [RouterLink],
  templateUrl: './menuhr.html',
  styleUrl: './menuhr.css',
})
export class Menuhr {
  isMenuActive = false;

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }

  logout() {
    localStorage.clear();
    window.location.href = '/login';
  }
}
