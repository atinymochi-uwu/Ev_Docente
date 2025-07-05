from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UsuarioViewSet, EvaluacionViewSet

router = DefaultRouter()
router.register(r'usuarios', UsuarioViewSet, basename='usuario')
router.register(r'evaluaciones', EvaluacionViewSet)

urlpatterns = [
    path('', include(router.urls)),
]