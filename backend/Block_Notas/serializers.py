# Import funcionalidad serializers
from rest_framework import serializers

# Import modelo
from Block_Notas.models import Notas

# NOTAS SERIALIZER
class NotasSerializers(serializers.ModelSerializer):
    class Meta:
        model = Notas
        fields = '__all__'




