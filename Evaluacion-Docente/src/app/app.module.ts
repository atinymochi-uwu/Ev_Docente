import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosInscritosComponent } from './features/cursos-inscritos/cursos-inscritos.component';
import { EvaluacionComponent } from './features/evaluacion/evaluacion.component';
import { PromedioComponent } from './features/promedio/promedio.component';
import { ListadoComponent } from './features/listado/listado.component';
import { BusquedaComponent } from './features/busqueda/busqueda.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosInscritosComponent,
    EvaluacionComponent,
    PromedioComponent,
    ListadoComponent,
    BusquedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
