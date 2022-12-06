# Import funcionalidad serializers
from rest_framework import serializers

# Import modelo
from Usuarios.models import Usuarios

class UsuariosSerializers(serializers.ModelSerializer):
    class Meta:
        model = Usuarios
        fields = '__all__'

