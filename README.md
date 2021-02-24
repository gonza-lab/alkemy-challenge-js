# Alkemy Challenge

Este es un repositorio de un web-app para manejar presupuesto personal. El backend esta construido con Express, Sequelize como ORM. Tiene un sistema de usuarios para ingresar y tambien registrarse. Tambien cuenta con tokens para mantener la sesion activa.
El frontend esta construido con React y utilice Redux para manejar el estado. Cualquier parecido con la realidad es pura ficción :)

## Getting started

Para poder arrancar la aplicación se necesita:

- Una base de datos MySQL

    - Para poder acceder a la base de datos debe completar el archivo `config.json` que se encuentra dentro de la carpeta config con los datos del usuario de su base de datos MySQL. Para mas información dirigirse a [este link](https://sequelize.org/master/manual/migrations.html#configuration)

- Un archivo .env con los siguientes campos: 
    
  - SECRET: Indica la clave con la que se encripta el token.

Una vez configurado el entorno, se deben ejecutar los siguientes comandos en orden:
1. `npm run build` 
2. `npm start` 

La aplicación estara corriendo en el puerto 5000.

## Documentacion

La documentación del backend se encuentra [aqui](./docs/backend.md)