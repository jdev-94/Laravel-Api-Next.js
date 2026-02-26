//Tipos de datos para los productos nos traemos desde la Api
export interface Producto {
    id: number;
    nombre: string;
    precio: number;
    created_at?: string;
    updated_at?: string;
}

//Tipos de datos para el formulario de crear productos
export interface FormValues {
    nombre: string;
    precio: number;
}