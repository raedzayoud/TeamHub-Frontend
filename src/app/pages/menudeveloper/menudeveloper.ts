import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-menudeveloper',
  imports: [RouterLink],
  templateUrl: './menudeveloper.html',
  styleUrl: './menudeveloper.css',
})
export class Menudeveloper {
  hamburger: HTMLElement | null = null;
  navMenu: HTMLElement | null = null;

  ngAfterViewInit() {
    this.hamburger = document.getElementById('hamburger');
    this.navMenu = document.getElementById('nav-menu');
    if (this.hamburger && this.navMenu) {
      this.hamburger.addEventListener('click', () => {
        this.navMenu!.classList.toggle('active');
        this.hamburger!.classList.toggle('active');
      });
    }
  }
}
