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