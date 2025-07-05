import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  getCursosInscritos(usuarioId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/usuarios/${usuarioId}/cursos_inscritos/`);
  }
}
