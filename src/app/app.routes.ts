import { Routes } from '@angular/router';
import { Login } from './pages/auth/login/login';
import { Menu } from './pages/menu/menu';
import { Landingpage } from './pages/landingpage/landingpage';
import { Developer } from './pages/developer/developer';
import { Tasksdeveloper } from './pages/tasksdeveloper/tasksdeveloper';
import { Overfiewdeveloper } from './pages/overfiewdeveloper/overfiewdeveloper';
import { Leavedeveloper } from './pages/leavedeveloper/leavedeveloper';
import { Payroll } from './pages/payroll/payroll';
import { Managerdashboard } from './pages/managerdashboard/managerdashboard';
import { Overviewmanager } from './pages/overviewmanager/overviewmanager';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'managerdashboard/overviewmanager',
    pathMatch: 'full',
  },

  { path: 'login', component: Login },
  { path: 'menu', component: Menu },
  { path: 'landingpage', component: Landingpage },

  {
    path: 'managerdashboard',
    component: Managerdashboard,
    children: [{ path: 'overviewmanager', component: Overviewmanager }],
  },

  {
    path: 'developer',
    component: Developer,
    children: [
      { path: 'tasksdeveloper', component: Tasksdeveloper },
      { path: 'overfiewdeveloper', component: Overfiewdeveloper },
      { path: 'leavedeveloper', component: Leavedeveloper },
      { path: 'payroll', component: Payroll },
      { path: '', redirectTo: 'overfiewdeveloper', pathMatch: 'full' },
    ],
  },
];
