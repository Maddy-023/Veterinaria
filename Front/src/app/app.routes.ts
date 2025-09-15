import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadComponent: () => import('./Components/auth/auth.component'). then(m => m.AuthComponent)
  },
  {
    path: 'admin-panel',
    loadComponent: () => import('./Components/admin-panel/admin-panel.component'). then(m => m.AdminPanelComponent)
  }
];
