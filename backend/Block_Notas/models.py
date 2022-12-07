# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Notas(models.Model):
    id_notas = models.AutoField(primary_key=True)
    titulo = models.CharField(max_length=100)
    cuerpo = models.TextField()
    id_usuarios = models.ForeignKey('Usuarios', models.DO_NOTHING, db_column='id_usuarios')
        
    def __str__(self):
        texto = '({0}) {1}'
        return texto.format(self.id_notas, self.titulo)
    class Meta:
            verbose_name = 'nota'
            verbose_name_plural = 'notas'
            db_table = 'notas'
            
    
       
    


class Usuarios(models.Model):
    id_usuarios = models.AutoField(primary_key=True)
    nombres = models.CharField(db_column='Nombres', max_length=50)  # Field name made lowercase.
    apellidos = models.CharField(db_column='Apellidos', max_length=50)  # Field name made lowercase.
    mail = models.CharField(db_column='Mail', max_length=50)  # Field name made lowercase.

    def __str__(self):
        texto = '({0}) {1} {2}'
        return texto.format(self.id_usuarios, self.nombres, self.apellidos)
    class Meta:
        verbose_name = 'Usuario'
        verbose_name_plural = 'Usuarios'
        db_table = 'usuarios'
       
