DOCUMENTACIÖN APLICACIÓN BLOK DE NOTAS

| Esta aplicación web está realizada con diversas tecnologías: |

-Como servidor se utiliza: Apache(xampp).
-Para el manejo de base de datos se utiliza MySQL en PHPMyAdmin.
-Para el Backend se utiliza el Framework Django, con Rest. Cuyo lenguaje es Python.
-Para el Frontend se utiliza el Framework React, con JSX y hoja d eestilo Css.

La aplicación conciste en la creación de un usuario, quien pueda tener acceso a una plataforma de notas rápidas y administrar las mismas.
Ya sea para editar, crear nuevas, visualizar y eliminar notas.

| Cuenta con 6(seis) pantallas: |

1 - Login de usuario: Te solicita mail y contraseña para poder ingresar, si las mismas son incorrectas permaneceras en la pantalla de Login, sí es correcta te redirigirá a la pantalla de Bienvenida. Esta pantalla cuenta con un botón para poder registrarte como usuario, el mismo te redirije a la pantalla correspondiente para tal fin.

2 - Registro de usuario: Te solicita una serie de datos (Nombre, Apellido, Mail, Nombre de Usuario y Contraseña). Luego de completar todos los campos podrás registrarte haciendo click en el botón que está por debajo del formulario. Luego te redirijirá a la pantalla de Login para que puedas iniciar sesion con tu cuenta.

3 - Pantalla de bienvenida y tutorial de uso de la app: La pantalla te recibe con tu nombre y apellido, además cuenta con una breve introducción al uso de la aplicación.

4 - Visualizar todas las notas creadas: En esta pantalla, podrás encontrar todas las notas creadas por el usuario, la misma muestra el titulo y cuerpo de la nota. Cuenta con un botón para poder acceder a la nota y visualizarla con mayor detalle en otra pantalla.

5 - Viasualizar una nota y borrar una nota. : Aquí podrás observar una nota creada por el usuario con mayor detalle, en la misma contarás con dos botones, uno para eliminar la nota y el otro para editar la misma.

6 -  Editar nota: En esta pantalla podrás editar tu nota, cambiando su título o cuerpo y pudiendo guardar nuevos datos. Luego de guardar los cambios apretando el botón correspondiente, se te redirijirá a la pantalla para visualizar todas las notas creadas.

7 - Crear una nota: Esta pantalla cuenta con su propio link en la barra de navegación, la misma te permite crear una nueva nota, introduciendo su título y cuerpo de la nota.

| Requerimientos / Dependencias: |

--> Backend (también podes encontrarlos en la carpeta de backend en ek archivo requeriments.txt):

PaPackage             Version
------------------- -------
asgiref             3.5.2
Django              4.1.3
django-cors-headers 3.13.0
djangorestframework 3.14.0
mysqlclient         2.1.1
pip                 22.3
pytz                2022.6
setuptools          65.5.0
sqlparse            0.4.3
tzdata              2022.7

asgiref==3.5.2
Django==4.1.3
django-cors-headers==3.13.0
djangorestframework==3.14.0
mysqlclient==2.1.1
pytz==2022.6
sqlparse==0.4.3
tzdata==2022.7

Comando para instalar pip install nombreDependencia

--> Frontend:

frontend@0.1.0 
+-- @testing-library/jest-dom@5.16.5
+-- @testing-library/react@13.4.0
+-- @testing-library/user-event@13.5.0
+-- bootstrap@5.2.3
+-- cors@2.8.5
+-- react-bootstrap@2.7.0
+-- react-dom@18.2.0
+-- react-router-dom@6.4.5
+-- react-scripts@5.0.1
+-- react@18.2.0
`-- web-vitals@2.1.4

Comando para instalar npm i nombreDependencia

| Correr la aplicación: |

Para correr la aplicación de manera local, es necesario:
--> Iniciar el servidor Apache(xampp) y MySQL. Abrir el PHPMyAdmin. Donde se ubica la base de datos.
--> Iniciar Django con el comando en terminal: python manage.py runserver.
--> Iniciar React con el comando en terminal: npm start.

| Finalizar uso de la aplicación: |

Para cortar la aplicación, es necesario:
--> Apagar servidor Apache(xampp) y MySQL. Desde terminal de operaciones propias (xampp).
--> Apagar Django mediante el comando en terminal: ctrl + c.
--> Apagar React mediante el comando en terminal: ctrl + c. Y luego: y.