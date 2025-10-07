import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-menudeveloper',
  imports: [RouterLink],
  templateUrl: './menudeveloper.html',
  styleUrl: './menudeveloper.css',
})
export class Menudeveloper {
  isMenuActive = false;

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }
}
