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

## 🛠️ Resumen de Comandos Técnicos
| Componente | Comando de Creación |
| :--- | :--- |
| **Modelo + Migración** | `php artisan make:model Producto -m` |
| **Controlador API** | `php artisan make:controller Api/ProductoController --api` |
| **Factory** | `php artisan make:factory ProductoFactory` |
| **Ejecutar Seeder** | `php artisan db:seed` |