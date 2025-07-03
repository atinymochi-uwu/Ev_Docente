from django.db import models

class Estudiante(models.Model):
    nombre = models.CharField(max_length=100)
    carrera = models.CharField(max_length=100)

class Docente(models.Model):
    nombre = models.CharField(max_length=100)

class Curso(models.Model):
    nombre = models.CharField(max_length=100)
    codigo = models.CharField(max_length=20)
    semestre = models.CharField(max_length=10)
    docente = models.ForeignKey(Docente, on_delete=models.CASCADE)
    estudiantes = models.ManyToManyField(Estudiante, related_name='cursos')

class Evaluacion(models.Model):
    estudiante = models.ForeignKey(Estudiante, on_delete=models.CASCADE)
    curso = models.ForeignKey(Curso, on_delete=models.CASCADE)
    nota = models.DecimalField(max_digits=3, decimal_places=1)
    comentario = models.TextField()
    fecha = models.DateField(auto_now_add=True)
