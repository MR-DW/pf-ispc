
from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin

class UsuarioManager(BaseUserManager):
    def _create_user(self, id_usuarios, username, email, nombre, apellido, password, is_staff, is_superuser, **extra_fields):
        Usuarios = self.model(
            id_usuarios= id_usuarios,
            username = username,
            email = email,
            nombre = nombre,
            apellido = apellido,
            is_staff = is_staff,
            is_superuser = is_superuser,
            **extra_fields
        )
        Usuarios.set_password(password)
        Usuarios.save(using=self.db)
        return Usuarios

    def create_user(self,  id_usuarios, username, email, nombre, apellido, password=None, **extra_fields):
        return self._create_user( id_usuarios, username, email, nombre, apellido, password, **extra_fields)

    def create_superuser(self,  id_usuarios, username, email, nombre, apellido, password=None, **extra_fields):
        return self._create_user( id_usuarios, username, email, nombre, apellido, password, **extra_fields)

class Usuarios(AbstractBaseUser, PermissionsMixin):
    id_usuarios = models.AutoField(primary_key=True)
    username = models.CharField('Nombres', max_length = 255, blank = True, null = True, unique=True)
    email = models.EmailField('Correo Electrónico',max_length = 255, unique = True,)
    nombre = models.CharField('Nombres', max_length = 255, blank = True, null = True)
    apellido = models.CharField('Apellidos', max_length = 255, blank = True, null = True)
    objects = UsuarioManager()

    class Meta:
        verbose_name = 'Usuario'
        verbose_name_plural = 'Usuarios'

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email','nombre','apellido']

    def __str__(self):
        return f'{self.nombre} {self.apellido}'