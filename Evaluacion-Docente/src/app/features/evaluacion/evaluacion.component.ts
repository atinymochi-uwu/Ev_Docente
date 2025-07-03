import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EvaluationService } from '../../services/evaluation.service';


@Component({
  selector: 'app-evaluacion',
  templateUrl: './evaluacion.component.html',
  imports: [CommonModule,  ReactiveFormsModule],
  styleUrl: './evaluacion.component.css',
})

export class EvaluacionComponent implements OnInit {
  courseId!: number;
  courseName!: string;
  evaluationForm!: FormGroup;
  submitted = false;
  evaluaciones: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private evaluationService: EvaluationService
  ) {}

  ngOnInit(): void {
    this.obtenerEvaluacionesHistoricas();
  }

  obtenerEvaluacionesHistoricas(): void {
    this.evaluationService.buscarEvaluaciones({ ano: 2024, semestre: 1 })
      .subscribe(data => {
        this.evaluaciones = data;
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
    alert('¡Evaluación enviada con éxito!');
    this.router.navigate(["estudiante/cursosinscritos"])

    this.evaluationService.postEvaluacion(data).subscribe({
    next: res => console.log('Evaluación enviada', res),
    error: err => console.error('Error al enviar evaluación', err)
  });
  }
}
