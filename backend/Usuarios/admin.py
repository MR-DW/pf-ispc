from django.contrib import admin
# Import models
from Usuarios.models import Usuarios
# from Usuarios.models import Notas

admin.site.register(Usuarios)

# @admin.register(Usuarios)

# class UsuarioAdmin(admin.ModelAdmin):    
#     list_display = ('nombre', 'apellido', 'id_usuarios', 'email',)