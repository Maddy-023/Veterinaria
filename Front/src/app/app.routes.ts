import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadComponent: () => import('./Components/Administrador/PanelAdmin/authadmin-panel/authadmin-panel.component'). then(m => m.AuthComponent)
  },
  {
    path: 'admin-panel',
    loadComponent: () => import('./Components/Administrador/PanelAdmin/paneladmin-panel/admin-panel.component'). then(m => m.AdminPanelComponent)
  }
];
