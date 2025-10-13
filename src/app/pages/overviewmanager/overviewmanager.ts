import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-overviewmanager',
  imports: [NgIf],
  templateUrl: './overviewmanager.html',
  styleUrl: './overviewmanager.css',
})
export class Overviewmanager {
  isShown: boolean = false;

  toggleShow() {
    this.isShown = !this.isShown;
  }
}
