from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from django.shortcuts import get_object_or_404

from .models import Carrera, Estudiante, Docente, Curso, Inscripcion, Evaluacion
from .serializers import (
    CarreraSerializer, EstudianteSerializer, DocenteSerializer,
    CursoSerializer, InscripcionSerializer, EvaluacionSerializer
)

class CarreraViewSet(viewsets.ModelViewSet):
    queryset = Carrera.objects.all()
    serializer_class = CarreraSerializer

class EstudianteViewSet(viewsets.ModelViewSet):
    queryset = Estudiante.objects.all()
    serializer_class = EstudianteSerializer

class DocenteViewSet(viewsets.ModelViewSet):
    queryset = Docente.objects.all()
    serializer_class = DocenteSerializer

class CursoViewSet(viewsets.ModelViewSet):
    queryset = Curso.objects.all()
    serializer_class = CursoSerializer

class InscripcionViewSet(viewsets.ModelViewSet):
    queryset = Inscripcion.objects.all()
    serializer_class = InscripcionSerializer

    @action(detail=True, methods=['get'])
    def evaluacion(self, request, pk=None):
        inscripcion = get_object_or_404(Inscripcion, pk=pk)
        try:
            evaluacion = Evaluacion.objects.get(inscripcion=inscripcion)
            serializer = EvaluacionSerializer(evaluacion)
            return Response(serializer.data)
        except Evaluacion.DoesNotExist:
            return Response({'detalle': 'No evaluado'}, status=status.HTTP_404_NOT_FOUND)

class EvaluacionViewSet(viewsets.ModelViewSet):
    queryset = Evaluacion.objects.all()
    serializer_class = EvaluacionSerializer

    # Ejemplo: /api/evaluaciones/historico/?estudiante_id=1&anio=2024&semestre=1
    @action(detail=False, methods=['get'])
    def historico(self, request):
        estudiante_id = request.query_params.get('estudiante_id')
        anio = request.query_params.get('anio')
        semestre = request.query_params.get('semestre')

        evaluaciones = Evaluacion.objects.all()

        if estudiante_id:
            evaluaciones = evaluaciones.filter(inscripcion__estudiante__id=estudiante_id)
        if anio:
            evaluaciones = evaluaciones.filter(inscripcion__curso__anio=anio)
        if semestre:
            evaluaciones = evaluaciones.filter(inscripcion__curso__semestre=semestre)

        serializer = self.get_serializer(evaluaciones, many=True)
        return Response(serializer.data)
