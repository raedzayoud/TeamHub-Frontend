import { Component, OnInit } from '@angular/core';
import { Menudeveloper } from '../menudeveloper/menudeveloper';
import { DeveloperService } from '../../../services/api/developer/developer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasksdeveloper',
  imports: [Menudeveloper, CommonModule],
  templateUrl: './tasksdeveloper.html',
  styleUrl: './tasksdeveloper.css',
})
export class Tasksdeveloper implements OnInit {
  tasks: string[] = [];
  constructor(private developerService: DeveloperService) {}
  ngOnInit(): void {
    this.getTask();
  }

  getTask() {
    this.developerService
      .getTask(Number(localStorage.getItem('idDeveloper')))
      .subscribe({
        next: (response: any) => {
          this.tasks = response.list;
        },
        error: (error: any) => {
          console.error(error);
        },
      });
  }
}
