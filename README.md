# EvaluacionDocente

Proyecto ficticio con nombres, cursos, etc totalmente ficticios con la finalidad de servir como evaluación.
Las características dentro del proyecto incluyen:
- Visualización de cursos inscritos por estudiante
- Evaluación de cursos con nota y comentarios
- Cálculo de promedios por docente y curso
- Filtros por carrera, semestre y nota promedio
- Gráficos agregados por carrera y período académico
- Búsqueda de cursos por nombre, código o docente

## Requisitos

- Node.js (v18 o v20)
- Angular CLI (`npm install -g @angular/cli`)

## Cómo ejecutar el proyecto localmente (Angular CLI)

### Pasos

Abre una terminal y ejecuta los siguientes comandos:
```bash
# Clona el repositorio
git clone https://github.com/atinymochi-uwu/Ev_Docente/tree/main/Evaluacion-Docente
cd Evaluacion-Docente
```
O descarga el archivo con el botón "Code", extráelo en una carpeta y abre una terminal en esa carpeta.

Luego, ejecuta los comandos:
```bash
# Instala dependencias
npm install

# Ejecuta en modo desarrollo
ng serve
```
Cuando esté ejecutándose, abre `http://localhost:4200/` en una pestaña nueva.

## Cómo ejecutar el proyecto con Docker
Este proyecto incluye un Dockerfile para compilar y servir la aplicación Angular como sitio estático.

En una terminal ejecuta lo siguiente:
```bash
docker build -t evaluacion-frontend .
docker run -d -p 80:80 evaluacion-frontend
```
Y abre http://localhost en una pestaña nueva.

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.10.
