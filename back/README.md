# API de Personajes

Esta API permite gestionar información de personajes. A continuación, se detallan las rutas disponibles para interactuar con la API.

## Rutas

### Obtener todos los personajes

- Método: GET
- Ruta: `/api/characters`
- Descripción: Obtiene una lista de todos los personajes.

#### Parámetros de consulta (opcionales):

- `name`: Nombre del personaje.
- `status`: Estado del personaje (Alive, Dead, unknown).
- `gender`: Género del personaje (Female, Male, Genderless, unknown).
- `page`: Número de página para paginación (por defecto 1).

#### Respuestas:

- `200`: Lista de personajes obtenida exitosamente.
- `500`: Error del servidor.

### Crear un nuevo personaje

- Método: POST
- Ruta: `/api/characters`
- Descripción: Crea un nuevo personaje.

#### Cuerpo de la solicitud (multipart/form-data):

- `name`: Nombre del personaje.
- `status`: Estado del personaje (Alive, Dead, unknown).
- `species`: Especie del personaje.
- `type`: Tipo del personaje.
- `gender`: Género del personaje (Female, Male, Genderless, unknown).
- `image`: Imagen del personaje.
- `episodes`: Array de episodios (cada uno como una cadena).
- `created`: Fecha de creación del personaje (formato date-time).

#### Respuestas:

- `201`: Personaje creado exitosamente.
- `400`: Solicitud inválida.
- `500`: Error del servidor.

### Obtener un personaje por su ID

- Método: GET
- Ruta: `/api/characters/:id`
- Descripción: Obtiene un personaje por su ID.

#### Parámetros de ruta:

- `id`: ID del personaje.

#### Respuestas:

- `200`: Personaje obtenido exitosamente.
- `404`: Personaje no encontrado.
- `500`: Error del servidor.

### Actualizar un personaje por su ID

- Método: PUT
- Ruta: `/api/characters/:id`
- Descripción: Actualiza un personaje por su ID.

#### Parámetros de ruta:

- `id`: ID del personaje.

#### Cuerpo de la solicitud (multipart/form-data):

- Los mismos campos que en la ruta de creación.

#### Respuestas:

- `200`: Personaje actualizado exitosamente.
- `400`: Solicitud inválida.
- `404`: Personaje no encontrado.
- `500`: Error del servidor.

### Eliminar un personaje por su ID

- Método: DELETE
- Ruta: `/api/characters/:id`
- Descripción: Elimina un personaje por su ID.

#### Parámetros de ruta:

- `id`: ID del personaje.

#### Respuestas:

- `204`: Personaje eliminado exitosamente.
- `404`: Personaje no encontrado.
- `500`: Error del servidor.

### Generar un PDF del personaje por su ID

- Método: GET
- Ruta: `/api/characters/pdf/:id`
- Descripción: Genera un PDF del personaje por su ID.

#### Parámetros de ruta:

- `id`: ID del personaje.

#### Respuestas:

- `200`: PDF generado exitosamente.
- `404`: Personaje no encontrado.
- `500`: Error del servidor.

## Configuración

Esta API se basa en [Node.js](https://nodejs.org/) y [Express](https://expressjs.com/), y utiliza [Mongoose](https://mongoosejs.com/) para la interacción con la base de datos MongoDB.

## Variables de Entorno

Antes de ejecutar la aplicación, asegúrate de configurar las siguientes variables de entorno en un archivo `.env` en la raíz del proyecto:

- `PORT`: Puerto en el que se ejecutará la aplicación.
- `DB`: URL de conexión a la base de datos MongoDB.

## Documentación de Swagger

Puedes encontrar la documentación interactiva de Swagger para esta API en la ruta `/api-docs` cuando ejecutes la aplicación.

## Instalación y Uso

1. Clona este repositorio: `git clone <URL_DEL_REPOSITORIO>`
2. Instala las dependencias: `npm install`
3. Configura la base de datos MongoDB en `database/config.js`
4. Ejecuta la aplicación: `npm start`
5. Accede a la API en: `http://localhost:PUERTO/api`

¡Disfruta utilizando la API de personajes!

---

Creado por Humberto Andueza
