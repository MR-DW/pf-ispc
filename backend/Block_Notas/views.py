from django.shortcuts import render

# rest - view imports
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Models imports
from Block_Notas.models import Notas
from Block_Notas.models import Usuarios

# Import Serializer
from Block_Notas.serializers import NotasSerializers
from Block_Notas.serializers import UsuariosSerializers



# Create your views here.

# METODO GET PARA EL USUARIO.
class UsuariosApiView(APIView):
    def get(self, request, pk):
        """Retrona listado de usuarios"""
        try:
                usuarios = Usuarios.objects.get(id_usuarios = pk)
              
                usuarios_serializer = UsuariosSerializers(usuarios)

                data = {'Mensaje':f'Bienvenido {usuarios.nombres} {usuarios.apellidos}'}
                
                return Response(
                    data = data,
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


# Create your views here.   
# METODOS PARA NOTAS
class MostrarNotas(APIView):
    def get(self, request):
        """Retrona listado de las notas creadas"""

        notas = Notas.objects.all()

        notas_serializer = NotasSerializers(notas, many=True)
        
        return Response(
           data = notas_serializer.data,
           status=status.HTTP_200_OK
        )

class EditarBorrarNotas(APIView):
    def get(self, request, pk):
        """Retrona una nota del listado de notas."""
        try:
            nota = Notas.objects.get(id_notas = pk)
            custom_nota_serializer =  NotasSerializers(nota)
            # print(custom_nota_serializer.value())
            return Response(
                data = custom_nota_serializer.data,
                status=status.HTTP_200_OK
            )
        except:    
            data ={
                'mensaje':'Tu nota no fue encontrada'
            }
            return Response(
                data = data,
                status=status.HTTP_400_BAD_REQUEST
            )

class CrearNotas(APIView):

        def post(self, request):

            """Me permite crear una nota"""

            nueva_nota_serializer =  NotasSerializers(data = request.data)
            print(nueva_nota_serializer)

            if nueva_nota_serializer.is_valid():
                nueva_nota_serializer.save()
                
                data = {
                'mensaje': 'Tu nota fue creada correctamente'
                    }

                return Response(
                    data = data,
                    status = status.HTTP_201_CREATED
                )
            return Response(
            data = nueva_nota_serializer.errors,
            status = status.HTTP_400_BAD_REQUEST
            )

        
        




