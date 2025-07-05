import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {
  private apiUrl = 'http://localhost:8000/api'; 

  constructor(private http: HttpClient) {}

  getEvaluacionesPorUsuario(usuarioId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/usuarios/${usuarioId}/evaluaciones/`);
  }

  evaluarCurso(inscripcionId: number, evaluacion: { nota: number, comentario: string }) {
  return this.http.post(`${this.apiUrl}/evaluaciones/`, {
    inscripcion: inscripcionId,
    nota: evaluacion.nota,
    comentario: evaluacion.comentario
  });
  }

  getEvaluacionesHistoricas(usuarioId: number, anio?: number, semestre?: number): Observable<any> {
    let url = `${this.apiUrl}/usuarios/${usuarioId}/evaluaciones/`;
    const params = [];
    if (anio) params.push(`anio=${anio}`);
    if (semestre) params.push(`semestre=${semestre}`);
    if (params.length > 0) {
      url += `?${params.join('&')}`;
    }
    return this.http.get(url);
  }
}