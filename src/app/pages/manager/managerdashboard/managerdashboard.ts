import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menumanager } from '../menumanager/menumanager';

@Component({
  selector: 'app-managerdashboard',
  imports: [RouterOutlet, Menumanager],
  templateUrl: './managerdashboard.html',
  styleUrl: './managerdashboard.css',
})
export class Managerdashboard {}
