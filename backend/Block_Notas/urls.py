
# Import del modulo path
from django.urls import path
# Import servicios 
from Block_Notas.views import LoginApiView

urlpatterns = [
    path('usuario-lista/', LoginApiView.as_view(), name='usuarios_lista'),
]
