import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosInscritosComponent } from './features/cursos-inscritos/cursos-inscritos.component';
import { BusquedaComponent } from './features/busqueda/busqueda.component';
import { EvaluacionComponent } from './features/evaluacion/evaluacion.component';
import { ListadoComponent } from './features/listado/listado.component';
import { PromedioComponent } from './features/promedio/promedio.component';
import { InicioComponent } from './features/inicio/inicio.component';

const routes: Routes = [
  {
    path: "",
    component: InicioComponent 
  },
  {
    path: "estudiante/cursosinscritos",
    component: CursosInscritosComponent 
  },
  {
    path: "busqueda",
    component: BusquedaComponent 
  },
  {
    path: "estudiante/evaluacion/:courseid",
    component: EvaluacionComponent 
  },
  {
    path: "docente/listado",
    component: ListadoComponent 
  },
  {
    path: "promedio",
    component: PromedioComponent 
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
