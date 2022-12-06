from django.shortcuts import render

# rest - view imports
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Models imports
from Usuarios.models import Usuarios


# Import Serializer
from Usuarios.serializers import UsuariosSerializers



# Create your views here.

# METODO GET PARA EL USUARIO.

class UsuariosApiView(APIView):
    def post(self, request, pk):
        """Retrona listado de usuarios"""
        try:
          usuarios = Usuarios.objects.get(id_usuarios = pk)

          usuarios_serializer = UsuariosSerializers(usuarios)
        
          data = {'Mensaje':'Bienvenido ...'}
        
          return Response(
              data = usuarios_serializer.data,
              status = status.HTTP_200_OK
          )
        except:
              data ={
              'mensaje':'Usuario inexistente'
              }
              return Response(
                  data = data,
                  status=status.HTTP_400_BAD_REQUEST
              )