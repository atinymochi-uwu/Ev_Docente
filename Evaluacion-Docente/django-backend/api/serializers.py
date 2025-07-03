from rest_framework import serializers
from .models import Estudiante, Docente, Curso, Inscripcion, Evaluacion

class EstudianteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Estudiante
        fields = '__all__'

class DocenteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Docente
        fields = '__all__'

class CursoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Curso
        fields = '__all__'

class InscripcionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inscripcion
        fields = '__all__'

class EvaluacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Evaluacion
        fields = '__all__'

    def validate_nota(self, value):
        if value < 1 or value > 7:
            raise serializers.ValidationError("La nota debe estar entre 1 y 7")
        return value

    def validate_comentario(self, value):
        if not value.strip():
            raise serializers.ValidationError("El comentario es obligatorio")
        return value
