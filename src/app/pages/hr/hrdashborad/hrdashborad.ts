import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menuhr } from '../menuhr/menuhr';

@Component({
  selector: 'app-hrdashborad',
  imports: [RouterOutlet, Menuhr],
  templateUrl: './hrdashborad.html',
  styleUrl: './hrdashborad.css',
})
export class Hrdashborad {}
