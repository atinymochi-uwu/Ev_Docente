from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import (
    CarreraViewSet, EstudianteViewSet, DocenteViewSet,
    CursoViewSet, InscripcionViewSet, EvaluacionViewSet
)

router = DefaultRouter()
router.register(r'carreras', CarreraViewSet)
router.register(r'estudiantes', EstudianteViewSet)
router.register(r'docentes', DocenteViewSet)
router.register(r'cursos', CursoViewSet)
router.register(r'inscripciones', InscripcionViewSet)
router.register(r'evaluaciones', EvaluacionViewSet)

urlpatterns = [
    path('', include(router.urls)),
]