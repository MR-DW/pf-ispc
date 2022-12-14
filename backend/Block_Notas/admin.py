from django.contrib import admin
# Import models
from Block_Notas.models import Notas

# Register your models here.
@admin.register(Notas)
class NotasAdmin(admin.ModelAdmin):    
    list_display = ('id_notas','titulo',)
    # list_editable = ('titulo',) 
     # --> Debe estar activado el list_display, permite editar los campos.
    # list_display_links = ('titulo',)
    # --> Cambia el link para editar el contenido al campo que seleccione.
    # ordering = ('nombre') --> Para ordenar decreciente - , ascendente no se le pone nada, por el campo que quiera. No debe estar list_display.
    # list_filter = ('id_notas', 'titulo',)
    # --> PErmite aplicar filtros para buscar
    # list_per_page = 2
    # --> Crea paginacion
    exclude = ('id_usuarios',)
    # --> Excluye el campo seleccionado, no puede editarse.
    
