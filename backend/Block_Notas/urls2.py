
# Import del modulo path
from django.urls import path
# Import servicios 
from Block_Notas.views import UsuariosApiView


urlpatterns = [
    path('usuario/<int:pk>/', UsuariosApiView.as_view(), name='usuario'),
]
