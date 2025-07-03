import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8000/api';  // Cambia si el backend está en otro host

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  constructor(private http: HttpClient) {}

  getCursosInscritos(estudianteId: number): Observable<any> {
    return this.http.get(`${API_URL}/inscripciones/?estudiante=${estudianteId}`);
  }

  postEvaluacion(evaluacion: any): Observable<any> {
    return this.http.post(`${API_URL}/evaluaciones/`, evaluacion);
  }

  getPromediosDocenteCurso(): Observable<any> {
    return this.http.get(`${API_URL}/reportes/promedios/`);
  }

  getPromediosCarreraSemestre(): Observable<any> {
    return this.http.get(`${API_URL}/reportes/carrera-semestre/`);
  }

  buscarEvaluaciones(params: any): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(key => {
      if (params[key]) {
        httpParams = httpParams.set(key, params[key]);
      }
    });
    return this.http.get(`${API_URL}/evaluaciones/`, { params: httpParams });
  }

  getEvaluacionDocentes(): Observable<any> {
    return this.http.get(`${API_URL}/reportes/docentes/`);
  }

  buscarCursos(termino: string): Observable<any> {
    return this.http.get(`${API_URL}/cursos/?search=${termino}`);
  }

  filtrarEvaluaciones(filtros: any): Observable<any> {
    let params = new HttpParams();
    Object.keys(filtros).forEach(key => {
      if (filtros[key]) {
        params = params.set(key, filtros[key]);
      }
    });
    return this.http.get(`${API_URL}/evaluaciones/`, { params });
  }

  getCursosSinEvaluar(estudianteId: number): Observable<any> {
    return this.http.get(`${API_URL}/advertencias/sin-evaluar/${estudianteId}/`);
  }
}
