# Proyecto MERN Rick and Morty

Este repositorio contiene un proyecto de React que implementa un CRUD de personajes de la famosa serie "Rick and Morty". A continuación, se detalla la realización de los requerimientos establecidos:

## Requerimientos

1. **CRUD de Personajes**: Se ha implementado un CRUD completo de personajes con los siguientes campos: ID, NAME, STATUS, SPECIES, TYPE, GENDER, IMAGE, URL, EPISODES, CREATED.

2. **Listado de Personajes**: La aplicación muestra una lista de personajes obtenidos desde el servidor.

3. **Búsqueda de Personajes**: Los usuarios pueden buscar personajes utilizando el endpoint adecuado.

4. **Filtros por Estado y Género**: Se permite aplicar filtros por estado y género utilizando los endpoints correspondientes.

5. **Paginación de Personajes**: La aplicación presenta una paginación de personajes. Si la página se recarga, la aplicación recuerda el punto de paginación y los filtros aplicados.

6. **Detalle de Personaje**: Al hacer clic en una tarjeta de personaje, se muestra una página con los detalles completos de ese personaje consumiendo el endpoint correspondiente.

7. **Detalles de Personaje**: La página interna del personaje muestra los datos especificados en el diseño proporcionado en Figma.

8. **Obtención Aleatoria de Personajes**: Existe una función para obtener múltiples personajes de forma aleatoria.

9. **Generación de Reporte en PDF**: Se ha implementado la generación de un reporte en PDF que contiene la información de los personajes con estado "Alive".

10. **Pruebas Unitarias**: Se han creado pruebas unitarias para garantizar el funcionamiento correcto de los componentes y funciones.

## Proceso de Instalación

1. Clona este repositorio a tu máquina local.
2. Abre una terminal en el directorio del proyecto.
3. Ejecuta el comando `yarn install` para instalar las dependencias.
4. Usa `yarn dev` para iniciar un servidor de desarrollo.
5. Si deseas construir el proyecto para producción, ejecuta `yarn build`.

## Vista Previa del Proyecto

Puedes acceder a una vista previa del proyecto en la siguiente URL: [https://rick-morty-ha.netlify.app](https://rick-morty-ha.netlify.app)

¡Explora la aplicación y disfruta de la experiencia de administrar y explorar los personajes de Rick and Morty!

PD: Aún no tengo listo el backend, proximamente lo estaré subiendo...