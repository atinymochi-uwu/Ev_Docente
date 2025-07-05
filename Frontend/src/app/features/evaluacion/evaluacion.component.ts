import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EvaluationService } from '../../services/evaluacion.service';

@Component({
  selector: 'app-evaluacion',
  templateUrl: './evaluacion.component.html',
  styleUrl: './evaluacion.component.css',
  imports: [CommonModule,  ReactiveFormsModule]
})

export class EvaluacionComponent implements OnInit {
  courseId!: number;
  courseName!: string;
  evaluationForm!: FormGroup;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private evaluationService: EvaluationService
  ) {}

  ngOnInit(): void {
    this.courseId = Number(this.route.snapshot.paramMap.get('courseId'));
    this.courseName = String(this.route.snapshot.paramMap.get('courseName'));
    this.evaluationForm = this.fb.group({
      nota: [null, [Validators.required, Validators.min(1), Validators.max(7)]],
      comentario: ['', Validators.required]
    });
  }

  get f() {
    return this.evaluationForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.evaluationForm.invalid) {
      return;
    }

    const data = {
      courseId: this.courseId,
      nota: this.evaluationForm.value.nota,
      comentario: this.evaluationForm.value.comentario
    };

    console.log('Evaluación enviada:', data);
    this.router.navigate(["estudiante/cursosinscritos"])
  }

  evaluar(inscripcionId: number, nota: number, comentario: string) {
  if (nota < 1 || nota > 7 || !comentario.trim()) {
    alert('La nota debe estar entre 1 y 7 y el comentario no puede estar vacío.');
    return;
  }

  this.evaluationService.evaluarCurso(inscripcionId, { nota, comentario })
    .subscribe({
      next: () => alert('Evaluación enviada correctamente'),
      error: () => alert('Error al enviar evaluación')
    });
  }
}