# Import funcionalidad serializers
# Rest imports
from rest_framework import serializers

# Models imports
from Usuarios.models import Usuarios


# Serializers
class UsuariosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuarios
        fields = '__all__'

    def create(self, validated_data):
        """
        Correción la encriptacion de la password al crear un usuario.
        """
        usuario = Usuarios(**validated_data)
        usuario.set_password(validated_data['password'])
        usuario.save()

        return usuario
