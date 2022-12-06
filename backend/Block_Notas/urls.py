
# Import del modulo path
from django.urls import path
# Import servicios 
from Block_Notas.views import NotasApiView

urlpatterns = [
    path('notas-lista/', NotasApiView.as_view(), name='listado-de-notas'),
]
