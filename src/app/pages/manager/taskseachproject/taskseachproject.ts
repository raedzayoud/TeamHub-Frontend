import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-taskseachproject',
  imports: [CommonModule],
  templateUrl: './taskseachproject.html',
  styleUrl: './taskseachproject.css',
})
export class Taskseachproject {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const projectId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Project ID:', projectId);
  }

  appear: boolean = false;

  toggleAppear() {
    this.appear = !this.appear;
  }
}
