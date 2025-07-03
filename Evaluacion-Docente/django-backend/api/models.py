from django.db import models

class Estudiante(models.Model):
    nombre = models.CharField(max_length=100)
    carrera = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre

class Docente(models.Model):
    nombre = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre

class Curso(models.Model):
    nombre = models.CharField(max_length=100)
    codigo = models.CharField(max_length=20)
    semestre = models.CharField(max_length=10)
    docente = models.ForeignKey(Docente, on_delete=models.CASCADE)
    estudiantes = models.ManyToManyField(Estudiante, related_name='cursos')

    def __str__(self):
        return f"{self.codigo} - {self.nombre}"

class Evaluacion(models.Model):
    estudiante = models.ForeignKey(Estudiante, on_delete=models.CASCADE, related_name='evaluaciones')
    curso = models.ForeignKey(Curso, on_delete=models.CASCADE, related_name='evaluaciones')
    nota = models.DecimalField(max_digits=2, decimal_places=1)
    comentario = models.TextField()
    ano = models.PositiveIntegerField()
    semestre = models.CharField(max_length=10)
    fecha = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('estudiante', 'curso', 'ano', 'semestre')

    def __str__(self):
        return f"Evaluacion {self.estudiante.nombre} - {self.curso.codigo} ({self.ano}-{self.semestre})"

class Inscripcion(models.Model):
    estudiante = models.ForeignKey(Estudiante, on_delete=models.CASCADE, related_name='inscripciones')
    curso = models.ForeignKey(Curso, on_delete=models.CASCADE, related_name='inscripciones')
    fecha_inscripcion = models.DateField(auto_now_add=True)

    class Meta:
        unique_together = ('estudiante', 'curso')

    def __str__(self):
        return f"{self.estudiante.nombre} inscrito en {self.curso.codigo}"