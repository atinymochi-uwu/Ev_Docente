from rest_framework import routers
from django.urls import path, include
from .views import EstudianteViewSet, DocenteViewSet, CursoViewSet, InscripcionViewSet, EvaluacionViewSet

router = routers.DefaultRouter()
router.register(r'estudiantes', EstudianteViewSet)
router.register(r'docentes', DocenteViewSet)
router.register(r'cursos', CursoViewSet)
router.register(r'inscripciones', InscripcionViewSet)
router.register(r'evaluaciones', EvaluacionViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
