from django.contrib import admin
# Import models
from Block_Notas.models import Notas

# Register your models here.
@admin.register(Notas)
class NotasAdmin(admin.ModelAdmin):    
    list_display = ('id_notas','titulo',)
    exclude = ('id_usuarios',)
    
