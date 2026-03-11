# 📦 Sistema de Gestión de Productos - Backend (Laravel)

Este proyecto es la API RESTful de la aplicación web, desarrollada con **Laravel 12**. Proporciona los endpoints necesarios para gestionar el CRUD de productos y se comunica con la base de datos.

## ✨ Características

* **API RESTful**: Endpoints estandarizados para operaciones CRUD.
* **Base de Datos Robusta**: Uso de Eloquent ORM.
* **Datos de Prueba**: Factories y Seeders configurados para generar datos automáticamente.
* **Validación**: Form Requests para asegurar la integridad de los datos.

## 🏗️ Arquitectura y Componentes Utilizados

Para el desarrollo de este backend, hemos aprovechado las herramientas avanzadas de **Laravel 12** para garantizar un entorno de datos robusto y una API eficiente:

### 🛤️ Rutas de API (`routes/api.php`)
Hemos implementado rutas estandarizadas mediante `Route::apiResource`. Esto permite que con una sola línea de código tengamos disponibles todos los endpoints necesarios para el CRUD de productos:
- `GET /api/productos` (Listar)
- `POST /api/productos` (Crear)
- `DELETE /api/productos/{id}` (Eliminar)

### 🎮 Controlador API (`app/Http/Controllers/Api`)
El **`ProductoController`** gestiona la lógica de negocio. Está diseñado para recibir peticiones JSON, interactuar con el modelo Eloquent y devolver respuestas con códigos de estado HTTP correctos (como `201 Created` o `200 OK`).

### 🏭 Factories (`database/factories`)
Para no trabajar con una base de datos vacía, hemos configurado un **`ProductoFactory`**. 
- Utilizamos la librería **Faker** para generar nombres de productos y precios aleatorios de forma automática.
- Esto nos permite crear cientos de registros de prueba en segundos con el comando `App\Models\Producto::factory()->create()`.

###  🌱 Seeders (`database/seeders`)
Hemos configurado el **`DatabaseSeeder`** para que, al ejecutar un solo comando, la base de datos se limpie y se vuelva a llenar con 10 productos frescos. 
- Comando: `php artisan migrate:refresh --seed`

---

## 🛠️ Instalación y Configuración

Sigue estos pasos para ejecutar la API en tu máquina local.

### 1. Prerrequisitos
* PHP (>= 8.2)
* Composer
* Un servidor de base de datos (MySQL, PostgreSQL, etc.)

### 2. Clonar el repositorio

* git clone <https://github.com/jdev-94/Laravel-Api-Next.js.git>

### 3. Instalar dependencias de PHP
* composer instal

### 4. Configurar el archivo de entorno (.env)
* Copia el archivo .env.example a .env y configura las credenciales de tu base de datos:
***cp .env.example .env**

- `DB_CONNECTION=mysql`
- `DB_HOST=127.0.0.1`
- `DB_PORT=3306`
- `DB_DATABASE=nombre_de_tu_base_datos`
- `DB_USERNAME=usuario`
- `DB_PASSWORD=contraseña`

### 5. Genera la clave de la aplicación
* **php artisan key:generate**

### 6. Ejecutar miraciones y seeders
* **php artisan migrate:refresh --seed**

### 7. Ejecutar el servidor local
* **php artisan serve**
**La API estará disponible en http://localhost:8000/api.**

