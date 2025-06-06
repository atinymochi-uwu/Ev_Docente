import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-cursos-inscritos',
  //standalone: false,
  templateUrl: './cursos-inscritos.component.html',
  styleUrl: './cursos-inscritos.component.css'
})
export class CursosInscritosComponent implements OnInit{
  courses = [
    { code: 'CS101', name: 'Programación I', evaluated: false },
    { code: 'MA201', name: 'Cálculo II', evaluated: true }
  ];

  constructor() {}

  ngOnInit(): void {}
}
