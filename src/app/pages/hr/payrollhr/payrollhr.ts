import { Component, OnInit } from '@angular/core';
import { HrService } from '../../../services/api/hr/hr';
import { DeveloperHr } from '../../../services/model/developerHr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payrollhr',
  imports: [CommonModule],
  templateUrl: './payrollhr.html',
  styleUrl: './payrollhr.css',
})
export class Payrollhr implements OnInit {
  employees: DeveloperHr[] = [];
  salaryTotal: number = 0;
  avergeSalary: number = 0;
  constructor(private hrService: HrService) {}
  ngOnInit(): void {
    this.getAllDevelopers();
    this.getTotalSalary();
    this.getAvergeSalary();
  }
  getAllDevelopers() {
    this.hrService.getAllDeveloper().subscribe(
      (data: any) => {
        this.employees = data.developers;
      },
      (error) => console.error('Error fetching developers:', error)
    );
  }

  getTotalSalary() {
    this.hrService.getSumSalary().subscribe(
      (data: any) => {
        this.salaryTotal = data.salary;
      },
      (error) => console.error('Error fetching total salary:', error)
    );
  }

  getAvergeSalary() {
    this.hrService.getAverageSalary().subscribe(
      (data: any) => {
        this.avergeSalary = data.AvergeSalary;
        this.avergeSalary = Math.round(this.avergeSalary);
      },
      (error) => console.error('Error fetching total salary:', error)
    );
  }
}
