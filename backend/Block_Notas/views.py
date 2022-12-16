from django.shortcuts import render

# rest - view imports
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Models imports
from Block_Notas.models import Notas
from Usuarios.models import Usuarios


# Import Serializer
from Block_Notas.serializers import NotasSerializers
# from Usuarios.serializers import UsuariosSerializer


 
# METODOS PARA NOTAS
# Mostrar Todas Las Notas
class MostrarNotas(APIView):
    def get(self, request, pk):
        """Retrona listado de las notas creadas"""

        # usuario = Usuarios.objects.get(id_usuarios = pk)
        notas = Notas.objects.filter(id_usuarios_id = pk)

        notas_serializer = NotasSerializers(notas, many=True)
        
        return Response(
           data = notas_serializer.data,
           status=status.HTTP_200_OK
        )

# Mostrar Una Nota
class TraerUnaNota(APIView):
    def get(self, request, pk2, pk):
        #  pk2,
        """Retrona una nota del listado de notas."""
        try:
            nota = Notas.objects.filter(id_usuarios_id = pk2).get(id_notas = pk)
          
            custom_nota_serializer =  NotasSerializers(nota)
            print(nota)
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

# Editar Una Nota
# @login_required
class EditarNota(APIView):
    def put(self, request, pk, pk2):
        """Modifica una nota particular."""
        try:
            nota = Notas.objects.filter(id_usuarios_id = pk2).get(id_notas = pk)
            custom_nota_serializer =  NotasSerializers(nota, data = request.data)
            # print(custom_nota_serializer.value())
            if custom_nota_serializer.is_valid():
                custom_nota_serializer.save()
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

# Borrar una Nota
# @login_required
class BorrarNota(APIView):
    def delete(self, request, pk2, pk):
        """Elimina una nota particular."""
        try:
            nota = Notas.objects.filter(id_usuarios_id = pk2).get(id_notas = pk)
            nota.delete()
            data = {
                'mensaje':'Tu nota ha sido eliminada correctamente',
            }
            return Response(
                data = data,
                status = status.HTTP_200_OK,
            )
        except:    
            data ={
                'mensaje':'Tu nota no fue encontrada'
            }
            return Response(
                data = data,
                status=status.HTTP_400_BAD_REQUEST
            )

# Crear Una Nota
class CrearNotas(APIView):

        def post(self, request):

            """Me permite crear una nota"""
            print('request',request)
            try:
                # nota = Notas.objects.filter(id_usuarios = pk)
                # print('usuario',nota)
                nueva_nota_serializer =  NotasSerializers( data = request.data)
                print('serializer:',nueva_nota_serializer)

                if nueva_nota_serializer.is_valid():
                    
                    nueva_nota_serializer.save()

                    return Response(
                            data = nueva_nota_serializer.data,
                            status = status.HTTP_201_CREATED
                    )
                
            except:    
                return Response(
                data = nueva_nota_serializer.errors,
                status = status.HTTP_400_BAD_REQUEST
                )
        
        




