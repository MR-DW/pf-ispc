
# Import del modulo path
from django.urls import path
# Import servicios 
from Usuarios.views import UsuariosApiView

urlpatterns = [
    path('usuario/', UsuariosApiView.as_view(), name='login'),
    
]
