
# Import del modulo path
from django.urls import path
# Import servicios 
from Block_Notas.views import (CrearNotas, EditarBorrarNotas, MostrarNotas)



urlpatterns = [
    path('ver-notas/', MostrarNotas.as_view(), name='listado-de-notas'),
    path('nueva-nota/', CrearNotas.as_view(), name='crear-notas'),
    path('custom-nota/<int:pk>/', EditarBorrarNotas.as_view(), name='editar-o-eliminar-nota'),
]
