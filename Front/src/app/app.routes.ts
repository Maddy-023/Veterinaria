import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadComponent: () => import('./Components/Administrador/PanelAdmin/auth/auth.component'). then(m => m.AuthComponent)
  },
  {
    path: 'admin-panel',
    loadComponent: () => import('./Components/Administrador/PanelAdmin/admin-panel/admin-panel.component'). then(m => m.AdminPanelComponent)
  }
];
