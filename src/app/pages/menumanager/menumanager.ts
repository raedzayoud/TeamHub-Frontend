import { Component } from '@angular/core';

@Component({
  selector: 'app-menumanager',
  imports: [],
  templateUrl: './menumanager.html',
  styleUrl: './menumanager.css',
})
export class Menumanager {
  isMenuActive = false;

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }
}
