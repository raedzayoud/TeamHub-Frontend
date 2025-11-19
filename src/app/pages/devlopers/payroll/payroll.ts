import { Component, OnInit } from '@angular/core';
import { Menudeveloper } from '../menudeveloper/menudeveloper';
import { DeveloperService } from '../../../services/api/developer/developer';

@Component({
  selector: 'app-payroll',
  imports: [Menudeveloper],
  templateUrl: './payroll.html',
  styleUrl: './payroll.css',
})
export class Payroll implements OnInit {
  salary: number = 0;
  constructor(private developerService: DeveloperService) {}
  ngOnInit(): void {
    this.getSalaryDeveloper();
  }

  getSalaryDeveloper() {
    this.developerService.getSalary().subscribe(
      (response: any) => {
        this.salary = response.salary;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
