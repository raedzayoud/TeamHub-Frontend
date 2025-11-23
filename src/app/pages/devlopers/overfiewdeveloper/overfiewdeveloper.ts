import { Component, OnInit } from '@angular/core';
import { Menudeveloper } from '../menudeveloper/menudeveloper';
import { DeveloperService } from '../../../services/api/developer/developer';
import { TaskCount } from '../../../services/model/taskCount';
import { TaskCountDeveloper } from '../../../services/model/taskcountDevloper';

@Component({
  selector: 'app-overfiewdeveloper',
  imports: [Menudeveloper],
  templateUrl: './overfiewdeveloper.html',
  styleUrl: './overfiewdeveloper.css',
})
export class Overfiewdeveloper implements OnInit {
  // Initialize with default values to prevent "undefined" errors in HTML
  tasks: TaskCountDeveloper = {
    inprogress: 0,
    done: 0,
    todo: 0,
  };

  sum: number = 0;

  constructor(private developerService: DeveloperService) {}

  ngOnInit(): void {
    this.getTask();
    // this.sum += this.tasks.done + this.tasks.inprogress + this.tasks.todo;
  }

  getTask() {
    console.log('Logged in developer ID:', localStorage.getItem('idDeveloper'));
    this.developerService
      .getTaskType(Number(localStorage.getItem('idDeveloper')))
      .subscribe(
        (response: any) => {
          this.tasks = response.list;
          this.sum = this.tasks.done + this.tasks.inprogress + this.tasks.todo;
        },
        (error: any) => {
          console.error('Error fetching tasks:', error);
        }
      );
  }
}
