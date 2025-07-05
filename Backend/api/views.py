from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Usuario, Inscripcion, Evaluacion
from .serializers import InscripcionConEvaluacionSerializer, EvaluacionSerializer

class UsuarioViewSet(viewsets.ViewSet):
    
    @action(detail=True, methods=['get'])
    def cursos_inscritos(self, request, pk=None):
        inscripciones = Inscripcion.objects.filter(estudiante_id=pk).select_related('curso')
        serializer = InscripcionConEvaluacionSerializer(inscripciones, many=True)
        return Response(serializer.data)

class EvaluacionViewSet(viewsets.ModelViewSet):
    queryset = Evaluacion.objects.all()
    serializer_class = EvaluacionSerializer