import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosInscritosComponent } from './features/cursos-inscritos/cursos-inscritos.component';
import { EvaluacionComponent } from './features/evaluacion/evaluacion.component';
import { PromedioComponent } from './features/promedio/promedio.component';
import { ListadoComponent } from './features/listado/listado.component';
import { BusquedaComponent } from './features/busqueda/busqueda.component';
import { InicioComponent } from './features/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosInscritosComponent,
    EvaluacionComponent,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
