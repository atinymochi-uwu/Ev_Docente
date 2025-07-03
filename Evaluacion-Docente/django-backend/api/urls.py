from rest_framework import routers
from django.urls import path, include
from .views import CursosSinEvaluarView, EstudianteViewSet, DocenteViewSet, CursoViewSet, EvaluacionDocenteGeneralView, InscripcionViewSet, EvaluacionViewSet, PromedioDocenteCursoView, PromedioPorCarreraSemestreView

router = routers.DefaultRouter()
router.register(r'estudiantes', EstudianteViewSet)
router.register(r'docentes', DocenteViewSet)
router.register(r'cursos', CursoViewSet)
router.register(r'inscripciones', InscripcionViewSet)
router.register(r'evaluaciones', EvaluacionViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/reportes/promedios/', PromedioDocenteCursoView.as_view()),
    path('api/reportes/carrera-semestre/', PromedioPorCarreraSemestreView.as_view()),
    path('api/reportes/docentes/', EvaluacionDocenteGeneralView.as_view()),
    path('api/advertencias/sin-evaluar/<int:estudiante_id>/', CursosSinEvaluarView.as_view()),

]
