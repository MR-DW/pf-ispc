
# Import del modulo path
from django.urls import path
# Import servicios 
from Usuarios.views import CrearUsuario

urlpatterns = [
    path('usuario/registrar-usuario/', CrearUsuario.as_view(), name='registrar-usuario'),
    # path('usuario/registrar-usuario/', CrearUsuario.as_view(), name='registrar-usuario'),
]
