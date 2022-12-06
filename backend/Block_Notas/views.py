from django.shortcuts import render

# rest - view imports
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Models imports
# from Block_Notas.models import Usuarios
from Block_Notas.models import Notas

# Import Serializer
# from Block_Notas.serializers import UsuariosSerializers
from Block_Notas.serializers import NotasSerializers


# Create your views here.
class NotasApiView(APIView):
    def get(self, request):
        """Retrona listado de las notas creadas"""

        notas = Notas.objects.all()

        notas_serializer =  NotasSerializers(notas, many=True)

        # print(usuarios_serializer)

        # print(usuarios_serializer.data)
        
        return Response(
           data = notas_serializer.data,
           status=status.HTTP_200_OK
        )

class NotasPostApiView(APIView):

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

        
        # print(usuarios_serializer)

        # print(usuarios_serializer.data)
        
        

# class UsuariosApiView(APIView):
#     def get(self, request):
#         """Retrona listado de usuarios"""

#         usuarios = Usuarios.objects.all()

#         # print(usuarios.values())

#         usuarios_serializer =  UsuariosSerializers(usuarios, many=True)

#         print(usuarios_serializer)

#         print(usuarios_serializer.data)
        
#         # data = {'Usuarios':'hola'}
        
#         return Response(
#            data = usuarios_serializer.data,
#            status=status.HTTP_200_OK
#         )


