# API's Challenge Back-end

### Prueba realizada por Jeferson Vergara

La prueba fue realizada por Jeferson Vergara.

Recuerda reemplazar cualquier información específica del proyecto, como la URL de conexión de MongoDB, con los valores correspondientes para tu entorno de desarrollo.

Esta es una guía para ejecutar un proyecto en Express que utiliza MongoDB como base de datos. A continuación, se detallan los pasos necesarios para configurar y ejecutar el proyecto.

## Requisitos previos

- Node.js instalado en el sistema.
- MongoDB instalado y en funcionamiento.

## Configuración del proyecto

1. Clona el repositorio del proyecto desde GitHub.
2. Navega hasta la carpeta raíz del proyecto.

## Instalación de dependencias

Abre una terminal en la carpeta raíz del proyecto y ejecuta el siguiente comando para instalar las dependencias del proyecto:

```bash
npm install
```

## Configuración de variables de entorno

1. Crea un archivo llamado `.env` en la carpeta raíz del proyecto.
2. Abre el archivo `.env` en un editor de texto y configura las siguientes variables:

```plaintext
MONGO_URL=tu_url_de_conexión_mongodb
```
```plaintext
JWT_SECRET= mySecretKey
```
Asegúrate de reemplazar `tu_url_de_conexión_mongodb` con la URL de conexión a tu instancia de MongoDB.

## Ejecución del servidor

Para ejecutar el servidor Express, en la terminal, ejecuta el siguiente comando:

```bash
npm start
```

El servidor se ejecutará en el puerto 3000 por defecto.
# API Routes

Este archivo define las rutas de la API utilizando Express y especifica las funciones controladoras asociadas a cada ruta. A continuación, se detallan las rutas disponibles junto con los campos necesarios para realizar las solicitudes y las respuestas correspondientes.

## Registro de usuarios

**URL:** `/api/register`

**Método:** `POST`

**Parámetros de la solicitud:**
- `email` (String, obligatorio): dirección de correo electrónico del usuario.
- `username` (String, obligatorio): nombre de usuario del usuario.
- `password` (String, obligatorio): contraseña del usuario.

**Respuesta exitosa:**
- Código de estado: 200
- Cuerpo de la respuesta: El usuario se ha registrado exitosamente.

**Respuesta de error:**
- Código de estado: 400
- Cuerpo de la respuesta: Mensaje de error indicando el motivo del fallo en el registro.

## Inicio de sesión de usuarios

**URL:** `/api/login`

**Método:** `POST`

**Parámetros de la solicitud:**
- `email` (String, obligatorio): dirección de correo electrónico del usuario registrado.
- `password` (String, obligatorio): contraseña del usuario registrado.

**Respuesta exitosa:**
- Código de estado: 200
- Cuerpo de la respuesta: El usuario ha iniciado sesión exitosamente. Puede incluir información adicional, como un token de autenticación.

**Respuesta de error:**
- Código de estado: 401
- Cuerpo de la respuesta: Mensaje de error indicando que las credenciales son inválidas o que el usuario no existe.

## Obtener todos los usuarios

**URL:** `/api/users`

**Método:** `GET`

**Parámetros de la solicitud:** No se requieren parámetros adicionales.

**Encabezados de la solicitud:**
- `Authorization` (String, obligatorio): Token de autenticación del usuario, obtenido durante el inicio de sesión.

**Respuesta exitosa:**
- Código de estado: 200
- Cuerpo de la respuesta: Lista de todos los usuarios registrados en el sistema.

**Respuesta de error:**
- Código de estado: 401
- Cuerpo de la respuesta: Mensaje de error indicando que se requiere autenticación o que el token de autenticación es inválido.

## Eliminar un usuario

**URL:** `/api/users/:id`

**Método:** `DELETE`

**Parámetros de la solicitud:**
- `id` (String, obligatorio): ID del usuario que se desea eliminar.

**Encabezados de la solicitud:**
- `Authorization` (String, obligatorio): Token de autenticación del usuario, obtenido durante el inicio de sesión.

**Respuesta exitosa:**
- Código de estado: 200
- Cuerpo de la respuesta: El usuario ha sido eliminado exitosamente.

**Respuesta de error:**
- Código de estado: 401
- Cuerpo de la respuesta: Mensaje de error indicando que se requiere autenticación o que el token de autenticación es inválido.

## Actualizar un usuario

**URL:** `/api/users/:id`

**Método:** `PATCH`

**Parámetros de la solicitud:**
- `id` (String, obligatorio): ID del usuario que se desea actualizar.

**Encabezados de la solicitud:**
- `Authorization` (String, obligatorio): Token
