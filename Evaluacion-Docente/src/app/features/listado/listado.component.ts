import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  standalone: false,
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  groupBy: 'none' | 'course' | 'teacher' = 'none';
  teachers = [
    {
      name: 'Juan Pérez',
      course: 'Estructura de Datos',
      semester: '2024-2',
      averageScore: 6.1
    },
    {
      name: ' Pedro Jara',
      course: 'Estructura de Datos',
      semester: '2024-1',
      averageScore: 6.0
    },
    {
      name: 'María González',
      course: 'Bases de Datos',
      semester: '2025-1',
      averageScore: 5.8
    },
    {
      name: 'Mario Casas',
      course: 'Bases de Datos',
      semester: '2025-2',
      averageScore: 5.1
    },
    {
      name: 'Carlos Rojas',
      course: 'Sistemas Operativos',
      semester: '2025-1',
      averageScore: 6.4
    },
    {
      name: 'Pablo Muñoz',
      course: 'Sistemas Operativos',
      semester: '2025-2',
      averageScore: 6.7
    }
  ];
  groupedByCourse: any[] = [];
  groupedByTeacher: any[] = [];

  ngOnInit(): void {
    this.prepareGroupedViews();
  }

  prepareGroupedViews(): void {
    this.groupedByCourse = this.groupByField('course');
    this.groupedByTeacher = this.groupByField('name');
  }

  private groupByField(field: 'course' | 'name'): any[] {
    const map = new Map<string, any>();

    this.teachers.forEach(t => {
      const key = t[field];
      if (!map.has(key)) {
        map.set(key, {
          [field]: key,
          teachers: new Set<string>(),
          courses: new Set<string>(),
          semesters: new Set<string>(),
          total: 0,
          count: 0
        });
      }

      const entry = map.get(key);
      entry.teachers.add(t.name);
      entry.courses.add(t.course);
      entry.semesters.add(t.semester);
      entry.total += t.averageScore;
      entry.count += 1;
    });

    return Array.from(map.values()).map(e => ({
      name: e.name,
      course: e.course,
      teachers: Array.from(e.teachers),
      courses: Array.from(e.courses),
      semesters: Array.from(e.semesters),
      average: (e.total / e.count).toFixed(1)
    }));
  }
}
