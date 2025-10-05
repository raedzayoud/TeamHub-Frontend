import { Routes } from '@angular/router';
import { Login } from './pages/auth/login/login';
import { Menu } from './pages/menu/menu';
import { Landingpage } from './pages/landingpage/landingpage';

export const routes: Routes = [
  { path: '', redirectTo: 'landingpage', pathMatch: 'full' },

  { path: 'login', component: Login },
  { path: 'menu', component: Menu },
  { path: 'landingpage', component: Landingpage },
];
