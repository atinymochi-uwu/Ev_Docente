from rest_framework import serializers
from .models import Carrera, Estudiante, Docente, Curso, Inscripcion, Evaluacion

class CarreraSerializer(serializers.ModelSerializer):
    class Meta:
        model = Carrera
        fields = '__all__'

class EstudianteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Estudiante
        fields = '__all__'

class DocenteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Docente
        fields = '__all__'

class CursoSerializer(serializers.ModelSerializer):
    docente = DocenteSerializer(read_only=True)
    carrera = CarreraSerializer(read_only=True)

    class Meta:
        model = Curso
        fields = '__all__'

class InscripcionSerializer(serializers.ModelSerializer):
    estudiante = EstudianteSerializer(read_only=True)
    curso = CursoSerializer(read_only=True)

    class Meta:
        model = Inscripcion
        fields = '__all__'

class EvaluacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Evaluacion
        fields = '__all__'

    def validate_nota(self, value):
        if value < 1.0 or value > 7.0:
            raise serializers.ValidationError("La nota debe estar entre 1 y 7.")
        return value

    def validate_comentario(self, value):
        if not value.strip():
            raise serializers.ValidationError("El comentario es obligatorio.")
        return value