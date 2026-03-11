# 📦 Sistema de Gestión de Productos - Frontend (Next.js)

Este proyecto es el frontend de una aplicación web para la gestión de productos (CRUD). Está desarrollado con **Next.js 14** (App Router) y consume una API REST construida con **Laravel**.

## ✨ Características

* **CRUD Completo**: Crear, Leer, Actualizar y Eliminar productos.
* **Diseño Moderno**: Interfaz construida con **Tailwind CSS**.
* **Tipado Fuerte**: Desarrollado con **TypeScript** para mayor robustez.
* **Validación de Formularios**: Validación del lado del cliente con **React Hook Form**.
* **Feedback Profesional**: Notificaciones flotantes profesionales (`react-hot-toast`) para éxito y errores.
* **Manejo de API**: Consumo de API utilizando **Axios**.

## 🛠️ Tecnologías Utilizadas

| Tecnología | Descripción |
| :--- | :--- |
| **Next.js 14** | Framework de React para producción (App Router). |
| **TypeScript** | Superset de JavaScript que añade tipado estático. |
| **Tailwind CSS** | Framework de CSS utility-first para estilos rápidos. |
| **Axios** | Cliente HTTP basado en promesas para realizar peticiones a la API. |
| **React Hook Form** | Librería para gestionar formularios de forma eficiente. |
| **React Hot Toast** | Notificaciones flotantes (Toasts) profesionales. |

## 🚀 Instalación y Configuración

Sigue estos pasos para ejecutar el proyecto en tu máquina local.

### 1. Prerrequisitos

* [Node.js](https://nodejs.org/) (versión 18 o superior recomendada).
* [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/).

### 2. Clonar el repositorio

* git clone <https://github.com/jdev-94/Laravel-Api-Next.js.git>

### 3. Instalar dependencias

* npm install o yarn install

### 4. Configuración de variables de entorno
**Crea un archivo .env.local en la raíz del proyecto y añade la URL de tu API de Laravel:**
* NEXT_PUBLIC_API_URL=http://localhost:8000/api

### 5. Ejecutar el proyecto

* npm run dev o yarn dev
  
### 📂 Estructura del Proyecto

```text
src/
├── app/
│   ├── layout.tsx         # Layout principal, configuración de Toaster
│   ├── page.tsx           # Página principal (Lista de productos)
│   └── products/
│       └── [id]/
│           └── edit/
│               └── page.tsx # Página de edición de producto
├── components/
│   └── ProductForm.tsx    # Formulario reutilizable (Crear/Editar)
├── lib/
│   └── axios.ts           # Configuración de Axios
└── types/
    └── index.ts           # Definición de interfaces TypeScript (Producto, FormValues)
