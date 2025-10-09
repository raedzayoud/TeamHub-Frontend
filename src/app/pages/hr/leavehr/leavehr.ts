import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-leavehr',
  imports: [NgIf],
  templateUrl: './leavehr.html',
  styleUrl: './leavehr.css',
})
export class Leavehr {
  activeTab: string = 'pending';

  setActive(card: string) {
    this.activeTab = card;
  }
}
