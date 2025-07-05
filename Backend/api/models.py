from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

class Usuario(models.Model):
    PERFIL_CHOICES = (
        ('alumno', 'Alumno'),
        ('docente', 'Docente'),
    )
    nombre = models.CharField(max_length=100)
    perfil = models.CharField(max_length=10, choices=PERFIL_CHOICES)

    def __str__(self):
        return self.nombre

class Carrera(models.Model):
    nombre = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre

class Estudiante(models.Model):
    nombre = models.CharField(max_length=100)
    carrera = models.ForeignKey(Carrera, on_delete=models.CASCADE)

    def __str__(self):
        return self.nombre

class Docente(models.Model):
    nombre = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre

class Curso(models.Model):
    nombre = models.CharField(max_length=100)
    codigo = models.CharField(max_length=20)
    docente = models.ForeignKey(Usuario, on_delete=models.CASCADE, related_name='cursos_dictados')

    def __str__(self):
        return f'{self.codigo} - {self.nombre}'

class Inscripcion(models.Model):
    estudiante = models.ForeignKey(Usuario, on_delete=models.CASCADE, related_name='inscripciones')
    curso = models.ForeignKey(Curso, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('estudiante', 'curso')

    def __str__(self):
        return f'{self.estudiante.nombre} en {self.curso.nombre}'


class Evaluacion(models.Model):
    inscripcion = models.OneToOneField('Inscripcion', on_delete=models.CASCADE, related_name='evaluacion')
    nota = models.DecimalField(max_digits=2, decimal_places=1,
                               validators=[MinValueValidator(1.0), MaxValueValidator(7.0)])
    comentario = models.TextField()
    fecha = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.inscripcion.estudiante.nombre} - {self.inscripcion.curso.nombre}: {self.nota}'