import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  constructor(private router: Router) {}

  goToStudent() {
    this.router.navigate(['estudiante/cursosinscritos']);
  }

  goToTeacher() {
    alert('Funcionalidad de docente aún no implementada.');
  }
}
