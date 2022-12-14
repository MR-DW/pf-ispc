
# Import del modulo path
from django.urls import path
# Import servicios 
from Block_Notas.views import ( MostrarNotas, TraerUnaNota, EditarNota, CrearNotas, BorrarNota )



urlpatterns = [
    path('mostrar-notas/<int:pk>/', MostrarNotas.as_view(), name='listado-de-notas'),
    path('tu-nota/<int:pk2>/<int:pk>/', TraerUnaNota.as_view(), name='editar-o-eliminar-nota'),
    path('editar-nota/<int:pk2>/<int:pk>/', EditarNota.as_view(), name='editar-nota'),
    path('borrar-nota/<int:pk2>/<int:pk>/', BorrarNota.as_view(), name='eliminar-nota'),
    path('nueva-nota/', CrearNotas.as_view(), name='crear-notas'),
]
# 