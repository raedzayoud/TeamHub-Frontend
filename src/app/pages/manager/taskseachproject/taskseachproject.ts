import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-taskseachproject',
  imports: [CommonModule],
  templateUrl: './taskseachproject.html',
  styleUrl: './taskseachproject.css',
})
export class Taskseachproject {
  appear: boolean = false;

  toggleAppear() {
    this.appear = !this.appear;
  }
}
