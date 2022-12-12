
# Import del modulo path
from django.urls import path
# Import servicios 
from Block_Notas.views import ( MostrarNotas, TraerUnaNota, EditarBorrarNota, CrearNotas, )



urlpatterns = [
    path('ver-notas/', MostrarNotas.as_view(), name='listado-de-notas'),
    path('custom-nota/<int:pk>/', TraerUnaNota.as_view(), name='editar-o-eliminar-nota'),
    path('custom-nota/<int:pk>/', EditarBorrarNota.as_view(), name='editar-o-eliminar-nota'),
    path('nueva-nota/', CrearNotas.as_view(), name='crear-notas'),
]
