import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
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
    alert('¡Evaluación enviada con éxito!');
    this.router.navigate(["estudiante/cursosinscritos"])
  }
}
