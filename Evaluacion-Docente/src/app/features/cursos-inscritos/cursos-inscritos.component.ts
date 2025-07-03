import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CommonModule} from '@angular/common';
import { EvaluationService } from '../../services/evaluation.service';

@Component({
  imports: [CommonModule],
  selector: 'app-cursos-inscritos',
  templateUrl: './cursos-inscritos.component.html',
  styleUrl: './cursos-inscritos.component.css'
})
export class CursosInscritosComponent implements OnInit{
  courses = [
    { id: 1, code: 'CS101', name: 'Programación I', evaluated: false },
    { id: 2, code: 'MA201', name: 'Cálculo II', evaluated: true }
  ];

  constructor(
    private router: Router,
  ) {}

  goToEvaluation(courseId: number) {
    this.router.navigate(['/estudiante/evaluacion', courseId]);
  }

  ngOnInit(): void {}
}
