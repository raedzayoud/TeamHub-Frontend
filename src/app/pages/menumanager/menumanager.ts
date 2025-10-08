import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menumanager',
  imports: [RouterLink],
  templateUrl: './menumanager.html',
  styleUrl: './menumanager.css',
})
export class Menumanager {
  isMenuActive = false;

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }
}
