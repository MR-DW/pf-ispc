from django.shortcuts import render

# rest - view imports
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Models imports
from Block_Notas.models import Usuarios

# Import Serializer
from Block_Notas.serializers import UsuariosSerializers


# Create your views here.

class UsuariosApiView(APIView):
    def get(self, request):
        """Retrona listado de usuarios"""

        usuarios = Usuarios.objects.all()

        # print(usuarios.values())

        usuarios_serializer =  UsuariosSerializers(usuarios, many=True)

        print(usuarios_serializer)

        print(usuarios_serializer.data)
        
        # data = {'Usuarios':'hola'}
        
        return Response(
           data = usuarios_serializer.data,
           status=status.HTTP_200_OK
        )


