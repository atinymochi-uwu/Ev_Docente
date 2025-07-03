from rest_framework import viewsets, filters
from .models import Estudiante, Docente, Curso, Inscripcion, Evaluacion
from .serializers import EstudianteSerializer, DocenteSerializer, CursoSerializer, InscripcionSerializer, EvaluacionSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from django.db.models import Avg
from .models import Evaluacion
from django_filters.rest_framework import DjangoFilterBackend

class EstudianteViewSet(viewsets.ModelViewSet):
    queryset = Estudiante.objects.all()
    serializer_class = EstudianteSerializer

class DocenteViewSet(viewsets.ModelViewSet):
    queryset = Docente.objects.all()
    serializer_class = DocenteSerializer

class CursoViewSet(viewsets.ModelViewSet):
    queryset = Curso.objects.all()
    serializer_class = CursoSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['nombre', 'codigo', 'docente__nombre']

class InscripcionViewSet(viewsets.ModelViewSet):
    queryset = Inscripcion.objects.all()
    serializer_class = InscripcionSerializer

class EvaluacionViewSet(viewsets.ModelViewSet):
    queryset = Evaluacion.objects.all()
    serializer_class = EvaluacionSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['curso__carrera', 'semestre', 'nota']

class PromedioDocenteCursoView(APIView):
    def get(self, request):
        resultados = Evaluacion.objects.values(
            'curso__nombre',
            'curso__docente__nombre'
        ).annotate(promedio=Avg('nota')).order_by('curso__nombre')
        return Response(resultados)
    
class PromedioPorCarreraSemestreView(APIView):
    def get(self, request):
        datos = Evaluacion.objects.values(
            'curso__carrera',
            'semestre'
        ).annotate(promedio=Avg('nota')).order_by('curso__carrera', 'semestre')
        return Response(datos)
    
class EvaluacionDocenteGeneralView(APIView):
    def get(self, request):
        datos = Evaluacion.objects.values(
            'curso__docente__nombre'
        ).annotate(promedio=Avg('nota')).order_by('-promedio')
        return Response(datos)
    
class CursosSinEvaluarView(APIView):
    def get(self, request, estudiante_id):
        cursos_inscritos = Inscripcion.objects.filter(estudiante_id=estudiante_id).values_list('curso_id', flat=True)
        cursos_evaluados = Evaluacion.objects.filter(estudiante_id=estudiante_id).values_list('curso_id', flat=True)
        sin_evaluar = Curso.objects.filter(id__in=cursos_inscritos).exclude(id__in=cursos_evaluados)
        data = CursoSerializer(sin_evaluar, many=True).data
        return Response(data)
