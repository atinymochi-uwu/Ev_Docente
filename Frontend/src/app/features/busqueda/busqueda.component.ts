import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-busqueda',
  imports: [FormsModule, CommonModule],
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaComponent {
  searchText = '';
  selectedCarrera = '';
  selectedSemestre = '';
  notaMinima: number | null = null;
  searchClicked = false;
  filteredResults: any[] = [];

  evaluations = [
    { course: 'Estructura de Datos', teacher: 'Juan Pérez', carrera: 'Ingeniería', semestre: '2024-2', promedio: 6.2 },
    { course: 'Bases de Datos', teacher: 'María González', carrera: 'Ingeniería', semestre: '2025-1', promedio: 5.8 },
    { course: 'Anatomía', teacher: 'Lucía Ríos', carrera: 'Medicina', semestre: '2025-1', promedio: 6.5 },
    { course: 'Derecho Civil', teacher: 'Carlos Torres', carrera: 'Derecho', semestre: '2024-2', promedio: 6.0 }
  ];

  getFilteredResults() {
    return this.evaluations.filter(e => {
      const matchSearch = this.searchText === '' || 
        e.course.toLowerCase().includes(this.searchText.toLowerCase()) ||
        e.teacher.toLowerCase().includes(this.searchText.toLowerCase());

      const matchCarrera = this.selectedCarrera === '' || e.carrera === this.selectedCarrera;
      const matchSemestre = this.selectedSemestre === '' || e.semestre === this.selectedSemestre;
      const matchNota = this.notaMinima === null || e.promedio >= this.notaMinima;

      return matchSearch && matchCarrera && matchSemestre && matchNota;
    });
  }
  doSearch() {
    this.searchClicked = true;
    this.filteredResults = this.evaluations.filter(e => {
      const matchSearch = this.searchText === '' ||
        e.course.toLowerCase().includes(this.searchText.toLowerCase()) ||
        e.teacher.toLowerCase().includes(this.searchText.toLowerCase());

      const matchCarrera = this.selectedCarrera === '' || e.carrera === this.selectedCarrera;
      const matchSemestre = this.selectedSemestre === '' || e.semestre === this.selectedSemestre;
      const matchNota = this.notaMinima === null || e.promedio >= this.notaMinima;

      return matchSearch && matchCarrera && matchSemestre && matchNota;
    });
  }
}
