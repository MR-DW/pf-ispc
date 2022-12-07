# Import funcionalidad serializers
from rest_framework import serializers

# Import modelo
from Block_Notas.models import Usuarios

# Import modelo
from Block_Notas.models import Notas

# NOTAS SERIALIZER
class NotasSerializers(serializers.ModelSerializer):
    class Meta:
        model = Notas
        fields = '__all__'



# USER SERIALIZER
class UsuariosSerializers(serializers.ModelSerializer):
    class Meta:
        model = Usuarios
        fields = '__all__'



