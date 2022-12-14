from rest_framework import status
from rest_framework.views import APIView
# from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

# Serializers imports
from Usuarios.serializers import UsuariosSerializer

# Models imports
from Usuarios.models import Usuarios


# CREAR UN USUARIO
class CrearUsuario(APIView):
    def post(self, request):
        """Crear un usuario"""

        usuario_serializer = UsuariosSerializer(data = request.data)

        # Validación
        if usuario_serializer.is_valid():

            # User
                usuario_serializer.save()

                data = {
                    'mensaje': 'Tu Usuario fue reado correctamente.'
                }
                return Response(
                    data = data, 
                    status=status.HTTP_201_CREATED
                )
           
        return Response(
                    data = UsuariosSerializer.errors,
                    status=status.HTTP_400_BAD_REQUEST
        )

class TraerUnUsuario(APIView):
    def get(self, request, pk):
        """Retrona una nota del listado de notas."""
        try:
            print('hola')
            usuario = Usuarios.objects.get(id_usuarios = pk)
            print('segundo hola')
            print(usuario)
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
# @api_view(['GET', 'POST'])
# def user_detail_view(self, request, pk):
#         """Detallar, actualizar y eliminar un usuario."""

#     # Validacion
#         try:
#             usuario = Usuarios.objects.get(id_usuarios = pk)

#         except:
#             return Response(
#                 {'message': 'Usuario no encontrado'},
#                 status=status.HTTP_400_BAD_REQUEST
#             )

#         # Detail
#         if request.method == 'GET':
#             user_serializer = UsuariosSerializer(usuario)

#             return Response(user_serializer.data)

#         # Update 
#         elif request.method == 'PUT':
#             user_serializer = UsuariosSerializer(usuario, data=request.data)

#             if user_serializer.is_valid():
#                 user_serializer.save()

#                 return Response(data=user_serializer.data)

#             return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
#         # Delete
#         elif request.method == 'DELETE':
#             usuario.delete()

#             return Response(
#                 {'message': 'Usuario eliminado correctamente'},
#                 status=status.HTTP_200_OK
#             )