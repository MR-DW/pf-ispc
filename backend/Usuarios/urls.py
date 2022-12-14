
# Import del modulo path
from django.urls import path
# Import servicios 
from Usuarios.views import ( CrearUsuario, TraerUnUsuario, )

urlpatterns = [
    path('registrar-usuario/', CrearUsuario.as_view(), name='registrar-usuario'),
    path('tu-usuario/<int:pk>/', TraerUnUsuario.as_view(), name='trae-un-usuario'),
]
