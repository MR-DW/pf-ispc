from django.contrib import admin
# Import models
from Usuarios.models import Usuarios
# from Usuarios.models import Notas

# Register your models here.
admin.site.register(Usuarios)
# admin.site.register(Notas)