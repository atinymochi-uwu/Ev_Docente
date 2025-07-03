from rest_framework import serializers
from .models import Estudiante, Docente, Curso, Evaluacion

class EstudianteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Estudiante
        fields = '__all__'

class DocenteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Docente
        fields = '__all__'

class CursoSerializer(serializers.ModelSerializer):
    docente = DocenteSerializer()
    class Meta:
        model = Curso
        fields = '__all__'

class EvaluacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Evaluacion
        fields = '__all__'
