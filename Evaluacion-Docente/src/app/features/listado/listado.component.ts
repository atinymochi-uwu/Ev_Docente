import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  standalone: false,
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  teachers = [
    {
      name: 'Juan Pérez',
      course: 'Estructura de Datos',
      semester: '2024-2',
      averageScore: 6.1
    },
    {
      name: 'María González',
      course: 'Bases de Datos',
      semester: '2025-1',
      averageScore: 5.8
    },
    {
      name: 'Carlos Rojas',
      course: 'Sistemas Operativos',
      semester: '2025-1',
      averageScore: 6.4
    }
  ];
}
