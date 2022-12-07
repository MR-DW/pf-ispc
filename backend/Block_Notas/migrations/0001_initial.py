# Generated by Django 4.1.3 on 2022-12-07 18:49

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Usuarios',
            fields=[
                ('id_usuaruios', models.AutoField(primary_key=True, serialize=False)),
                ('nombres', models.CharField(db_column='Nombres', max_length=50)),
                ('apellidos', models.CharField(db_column='Apellidos', max_length=50)),
                ('mail', models.CharField(db_column='Mail', max_length=50)),
            ],
            options={
                'verbose_name': 'usuario',
                'verbose_name_plural': 'usuarios',
                'db_table': 'usuarios',
            },
        ),
        migrations.CreateModel(
            name='Notas',
            fields=[
                ('id_notas', models.AutoField(primary_key=True, serialize=False)),
                ('titulo', models.CharField(max_length=100)),
                ('cuerpo', models.TextField()),
                ('id_usuarios', models.ForeignKey(db_column='id_usuarios', on_delete=django.db.models.deletion.DO_NOTHING, to='Block_Notas.usuarios')),
            ],
            options={
                'verbose_name': 'nota',
                'verbose_name_plural': 'notas',
                'db_table': 'notas',
            },
        ),
    ]
