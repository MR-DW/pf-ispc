from django.contrib import admin
# Import models
from Block_Notas.models import Usuarios
from Block_Notas.models import Notas

# Register your models here.
admin.site.register(Usuarios)
admin.site.register(Notas)