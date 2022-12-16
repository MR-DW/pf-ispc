from rest_framework import status
from rest_framework.views import APIView
# from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

# Serializers imports
from Usuarios.serializers import UsuariosSerializer

# Models imports
from Usuarios.models import Usuarios

# # Import de funcion login
# from django.contrib.auth.decorators import login_required


# CREAR UN USUARIO
class CrearUsuario(APIView):

    def post(self, request):
        """Crear un usuario"""
        print(request.data)
        usuario_serializer = UsuariosSerializer(data = request.data)
        print(usuario_serializer)
        # Validación
        if usuario_serializer.is_valid():
            usuario_serializer.save()

            data = {
                'mensaje': 'Tu Usuario fue creado correctamente.'
            }
            
            return Response(
                    data = data, 
                    status=status.HTTP_201_CREATED
            )
           
        return Response(
            data = usuario_serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )


class TraerUnUsuario(APIView):
    def post(self, request, pk):
        """Retrona una nota del listado de notas."""
        try:
            usuario = Usuarios.objects.get(id_usuarios = pk)
            usuario_serializer = UsuariosSerializer(usuario)
            print(usuario_serializer)
            return Response(
                data = usuario_serializer.data,
                status=status.HTTP_200_OK
            )
        except:    
            data ={
                'mensaje':'Tu usuario no fue encontrada'
            }
            return Response(
                data = data,
                status=status.HTTP_400_BAD_REQUEST
            )
