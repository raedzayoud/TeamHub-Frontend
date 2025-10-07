import { Component } from '@angular/core';
import { Menu } from '../menu/menu';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  imports: [Menu],
  templateUrl: './landingpage.html',
  styleUrl: './landingpage.css',
})
export class Landingpage {}
