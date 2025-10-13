import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SideMenuComponent } from "./Components/Administrador/PanelAdmin/side-menu/side-menu.component";
import { CommonModule } from '@angular/common';
import { AuthComponent } from "./Components/Administrador/PanelAdmin/auth/auth.component";
import { NavComponent } from "./Components/Administrador/PanelAdmin/nav/nav.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideMenuComponent, CommonModule, AuthComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Front';

  constructor(public router: Router) { }

  isInAuth = true;

  ngOnInit(): void {
      this.router.events.subscribe(() => {
        this.isInAuthRoute();
      });
    }

  isInAuthRoute() {
    const currentRoute = this.router.url; // Obtiene la ruta actual

    // Comprueba si la ruta es de autenticación (ajusta según tu configuración de rutas)
    if (currentRoute.includes('auth')) {
      this.isInAuth = false; // Oculta el navegador en la ruta de login
    } else {
      this.isInAuth = true; // Muestra el navegador en otras rutas
    }
  }

}
