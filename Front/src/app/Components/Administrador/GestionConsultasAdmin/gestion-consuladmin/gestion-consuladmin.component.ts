import { Component } from '@angular/core';

@Component({
  selector: 'gestion-consultasadmin',
  templateUrl: './gestion-consuladmin.component.html',
  styleUrls: ['./gestion-consuladmin.component.css']
})
export class GestionConsuladminComponent {
  consultas = [
    { fecha: '01/01/2025', hora: '09:00', nombreMascota: 'Firulais 1', detalles: 'Detalles de la consulta' },
    { fecha: '02/01/2025', hora: '10:00', nombreMascota: 'Firulais 1', detalles: 'Detalles de la consulta' },
    { fecha: '03/01/2025', hora: '11:30', nombreMascota: 'Firulais 1', detalles: 'Detalles de la consulta' },
    { fecha: '04/01/2025', hora: '13:00', nombreMascota: 'Firulais 1', detalles: 'Detalles de la consulta' },
    { fecha: '05/01/2025', hora: '15:00', nombreMascota: 'Firulais 1', detalles: 'Detalles de la consulta' },
  ];
}
