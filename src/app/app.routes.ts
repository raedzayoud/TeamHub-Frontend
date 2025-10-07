import { Routes } from '@angular/router';
import { Login } from './pages/auth/login/login';
import { Menu } from './pages/menu/menu';
import { Landingpage } from './pages/landingpage/landingpage';
import { Developer } from './pages/developer/developer';
import { Tasksdeveloper } from './pages/tasksdeveloper/tasksdeveloper';
import { Overfiewdeveloper } from './pages/overfiewdeveloper/overfiewdeveloper';
import { Leavedeveloper } from './pages/leavedeveloper/leavedeveloper';
import { Payroll } from './pages/payroll/payroll';

export const routes: Routes = [
  // Redirect root to developer/overfiewdeveloper
  { path: '', redirectTo: 'developer/overfiewdeveloper', pathMatch: 'full' },

  { path: 'login', component: Login },
  { path: 'menu', component: Menu },
  { path: 'landingpage', component: Landingpage },

  {
    path: 'developer',
    component: Developer,
    children: [
      { path: 'tasksdeveloper', component: Tasksdeveloper },
      { path: 'overfiewdeveloper', component: Overfiewdeveloper },
      { path: 'leavedeveloper', component: Leavedeveloper },
      { path: 'payroll', component: Payroll },
      // Optional: redirect /developer to /developer/overfiewdeveloper
      { path: '', redirectTo: 'overfiewdeveloper', pathMatch: 'full' },
    ],
  },

  // Optional wildcard for 404
  { path: '**', redirectTo: 'developer/overfiewdeveloper' },
];
