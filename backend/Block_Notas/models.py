# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models
from Usuarios.models import Usuarios

class Notas(models.Model):
    id_notas = models.AutoField(primary_key=True)
    titulo = models.TextField()
    cuerpo = models.TextField()
    id_usuarios = models.ForeignKey(
        Usuarios,
        on_delete = models.CASCADE,)

    def __str__(self):
        texto = '({0}) {1}'
        return texto.format(self.id_notas, self.titulo)
    class Meta:
        verbose_name = 'nota'
        verbose_name_plural = 'notas'
        db_table = 'notas'


