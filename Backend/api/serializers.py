from rest_framework import serializers
from .models import Usuario, Curso, Inscripcion, Evaluacion


class CursoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Curso
        fields = ['id', 'nombre', 'codigo']


class InscripcionConEvaluacionSerializer(serializers.ModelSerializer):
    curso = CursoSerializer()
    evaluado = serializers.SerializerMethodField()

    class Meta:
        model = Inscripcion
        fields = ['id', 'curso', 'evaluado']

    def get_evaluado(self, obj):
        return hasattr(obj, 'evaluacion')
    
class EvaluacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Evaluacion
        fields = ['id', 'inscripcion', 'nota', 'comentario', 'fecha']
    
    def validate_nota(self, value):
        if not (1.0 <= value <= 7.0):
            raise serializers.ValidationError("La nota debe estar entre 1.0 y 7.0.")
        return value

    def validate_comentario(self, value):
        if not value.strip():
            raise serializers.ValidationError("El comentario es obligatorio.")
        return value