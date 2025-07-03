from django.contrib import admin
from .models import Estudiante, Docente, Curso, Evaluacion

admin.site.register([Estudiante, Docente, Curso, Evaluacion])
