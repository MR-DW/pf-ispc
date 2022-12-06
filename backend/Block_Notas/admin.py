from django.contrib import admin
# Import models
from Block_Notas.models import Login
from Block_Notas.models import Notas

# Register your models here.
admin.site.register(Login)
admin.site.register(Notas)