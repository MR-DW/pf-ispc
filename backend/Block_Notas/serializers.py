# Import funcionalidad serializers
from rest_framework import serializers

# Import modelo
# from Block_Notas.models import Usuarios
from Block_Notas.models import Notas

class NotasSerializers(serializers.ModelSerializer):
    class Meta:
        model = Notas
        fields = '__all__'


# class UsuariosSerializers(serializers.ModelSerializer):
#     class Meta:
#         model = Usuarios
#         fields = '__all__'

