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
  },
  {
    path: 'gestion-usuarios',
    loadComponent: () => import('./Components/Administrador/GestionUser/gestion-user/gestion-user.component'). then(m => m.GestionUserAdminComponent)
  },
  {
    path: 'gestion-citas',
    loadComponent: () => import('./Components/Administrador/GestionCitas/gestion-citas/gestion-citas.component'). then(m => m.GestionCitasAdminComponent)
  },  
  {
    path: 'gestion-padu',
    loadComponent: () => import('./Components/Administrador/GestionPacientesDueños/gestion-padu/gestion-padu.component'). then(m => m.GestionPacientesDueñosComponent)
  },
  {
    path: 'gestion-consultasadmin',
    loadComponent: () => import('./Components/Administrador/GestionConsultasAdmin/gestion-consuladmin/gestion-consuladmin.component'). then(m => m.GestionConsuladminComponent)
  },  
  {
    path: 'configuracion',
    loadComponent: () => import('./Components/Administrador/ConfiguracionSistema/configsistem/configsistem.component'). then(m => m.ConfiguracionSistemaComponent)
  }

];
