/**
 * 
 * register -> Contiene (name,onChange, onBlur, ref) devuelve objeto con esas propiedades.
 * 
 * handleSubmit(onSubmit) -> realiza e.preventDefault y llama a la función onSubmit si las validaciones están ok.
 * 
 * await client.post -> Enviamos datos a la API (LARAVEL);
 * 
 * reset() -> Limpiamos el formulario.
 * 
 * onAdded() -> Ejecuta la función fetchProductos ubicada en page.tsx. La tabla se actualiza sin recarga.
 * 
 */

"use client";
import { useForm } from "react-hook-form";
import client from "@/src/lib/axios";
import { FormValues, ProductFormProps, Producto } from "@/src/types/index";
import { AxiosError } from "axios"; //Manejamos los errores con Axios
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation"; // Importa useRouter para dirigir a una vista predeterminada

export default function ProductForm({ onAdded, initialData, isEditing = false }: ProductFormProps) {
    //Inicializamos el Hook useForm
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
        //Rellena el formulario si tiene datos
        defaultValues: initialData || { nombre: '', precio: 0 }
    });

    const router = useRouter(); //Inicializamos el router

    //Ejecutamos la función si los datos pasan la validación
    const onSubmit = async (data: FormValues) => {
        try {

            if (isEditing && initialData) {
                //usamos put porque actualizamos un producto
                await client.put<Producto>(`/productos/${initialData.id}`, data);
                toast.success("¡Producto actualizado!");
            } else {
                //usamos Post porque creamos un producto
                await client.post<Producto>("/productos", data);
                toast.success("¡Producto creado!");
            }
            reset();
            onAdded();

            router.push("/products/all");
        } catch (error) {
            if (error instanceof AxiosError) {
                if (error.response?.status === 422) {
                    const serverErrors = error.response.data.errors;
                    const message = Object.values(serverErrors).flat().join('\n');
                    toast.error(`Error; \n${message}`, { duration: 5000 });
                } else {
                    toast.error('Error en el servidor');
                }
            } else {
                toast.error("Hubo un error inesperado.");
            }
        }
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-8">
            <h2 className="text-lg font-semibold mb-4 text-slate-800">Crear Productos</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col md:flex-row gap-4 items-start">

                {/* Input Nombre */}
                <div className="flex-1 w-full">
                    <input
                        {...register("nombre", { required: "Indicar el nombre del producto" })}
                        placeholder="Nombre del Producto.."
                        className={`w-full p-3 rounded-xl bg-slate-50 ring-1 outline-none transition ${errors.nombre ? 'ring-red-500' : 'ring-slate-200 focus:ring-blue-500'}`}
                    />
                    {errors.nombre && <span className="text-xs text-red-500 mt-1">{errors.nombre.message}</span>}
                </div>

                {/* Input Precio */}
                <div className="w-full md:w-32">
                    <input
                        type="number"
                        step="0.01"
                        {...register("precio", { required: "Indicar el precio", min: 0.01 })}
                        placeholder="0.00"
                        className={`w-full p-3 rounded-xl bg-slate-50 ring-1 outline-none transition ${errors.precio ? 'ring-red-500' : 'ring-slate-200 focus:ring-blue-500'}`}
                    />
                    {errors.precio && <span className="text-xs text-red-500 mt-1">Min 0.01</span>}
                </div>

                <button type="submit" className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-all">
                    {isEditing ? "Guardar Cambios" : "Crear Producto"}
                </button>
            </form>
        </div>
    );

}