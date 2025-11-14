import { Routes } from '@angular/router';
import { Menu } from './pages/menu/menu';
import { Landingpage } from './pages/landingpage/landingpage';
import { Managerdashboard } from './pages/manager/managerdashboard/managerdashboard';
import { Overviewmanager } from './pages/manager/overviewmanager/overviewmanager';
import { Projectmanager } from './pages/manager/projectmanager/projectmanager';
import { Teamsmanger } from './pages/manager/teamsmanger/teamsmanger';
import { Hrdashborad } from './pages/hr/hrdashborad/hrdashborad';
import { Overviewhr } from './pages/hr/overviewhr/overviewhr';
import { Employeehr } from './pages/hr/employeehr/employeehr';
import { Leavehr } from './pages/hr/leavehr/leavehr';
import { Payrollhr } from './pages/hr/payrollhr/payrollhr';
import { Analytichr } from './pages/hr/analytichr/analytichr';
import { Developer } from './pages/devlopers/developer/developer';
import { Tasksdeveloper } from './pages/devlopers/tasksdeveloper/tasksdeveloper';
import { Overfiewdeveloper } from './pages/devlopers/overfiewdeveloper/overfiewdeveloper';
import { Leavedeveloper } from './pages/devlopers/leavedeveloper/leavedeveloper';
import { Taskseachproject } from './pages/manager/taskseachproject/taskseachproject';
import { Payroll } from './pages/devlopers/payroll/payroll';
import { Login } from './pages/auth/login/login';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/landingpage',
    pathMatch: 'full',
  },

  { path: 'login', component: Login },
  { path: 'menu', component: Menu },
  { path: 'landingpage', component: Landingpage },

  {
    path: 'managerdashboard',
    component: Managerdashboard,
    children: [
      { path: 'overviewmanager', component: Overviewmanager },
      { path: 'projectmanager', component: Projectmanager },
      { path: 'teamsmanger', component: Teamsmanger },
      { path: 'taskseachproject/:id', component: Taskseachproject },
      { path: '', redirectTo: 'overviewmanager', pathMatch: 'full' },
    ],
  },
  {
    path: 'hrdashborad',
    component: Hrdashborad,
    children: [
      { path: 'overviewhr', component: Overviewhr },
      { path: 'employeehr', component: Employeehr },
      { path: 'leavehr', component: Leavehr },
      { path: 'payrollhr', component: Payrollhr },
      { path: 'analytichr', component: Analytichr },
      { path: '', redirectTo: 'overviewhr', pathMatch: 'full' },
    ],
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
