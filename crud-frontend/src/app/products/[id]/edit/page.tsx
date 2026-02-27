'use client';
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import client from "@/src/lib/axios";
import ProductForm from "@/src/app/components/ProductForm";
import { Producto } from "@/src/types";
import Link from "next/link";

export default function EditProductPage() {
    const { id } = useParams();
    const router = useRouter();
    const [producto, setProducto] = useState<Producto | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        //Cargamos los datos actuales del producto desde Laravel.
        const fetchProducto = async () => {
            try {
                const response = await client.get<Producto>(`/productos/${id}`);
                setProducto(response.data);
            } catch (error) {
                console.error('Error al obtener el producto', error);
                alert('Producto no encontrado');
                router.push('/');
            } finally {
                setLoading(false);
            }
        };
        fetchProducto();
    }, [id, router]);

    //Volvemos al inicio tras editar
    const handleUpdated = () => {
        router.push('/');
    }

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-slate-500 font-medium animate-pulse">Cargando producto...</p>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-[#f8fafc] p-4 md:p-12 text-slate-900">
            <div className="max-w-2xl mx-auto">

                {/* Botón Volver Minimalista con Indigo */}
                <Link
                    href="/products/all"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-indigo-600 transition-all mb-8 group"
                >
                    <div className="p-2 rounded-xl bg-white border border-slate-200 shadow-sm group-hover:border-indigo-200 group-hover:bg-indigo-50">
                        <span className="block group-hover:-translate-x-1 transition-transform">←</span>
                    </div>
                    Panel de Control
                </Link>

                <div className="bg-white rounded-[2rem] shadow-2xl shadow-indigo-100 border border-slate-100 overflow-hidden">

                    <div className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-800 p-10 md:p-14 text-white relative">

                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="bg-indigo-400/30 backdrop-blur-md text-indigo-100 text-[10px] font-bold px-3 py-1 rounded-lg uppercase tracking-[0.2em]">
                                    Editor de Registro
                                </span>
                                <span className="text-indigo-300 text-xs font-mono">ID: {id}</span>
                            </div>

                            <h1 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight">
                                {producto?.nombre}
                            </h1>
                            <p className="text-indigo-100/80 mt-3 text-lg font-medium">
                                Actualiza los parámetros del inventario con precisión.
                            </p>
                        </div>
                    </div>

                    <div className="p-8 md:p-12 bg-white">
                        {/* Contenedor del Formulario con un toque sutil de fondo */}
                        <div className="bg-slate-50/50 p-6 rounded-3xl border border-slate-100">
                            <ProductForm onAdded={handleUpdated} initialData={producto} isEditing={true} />
                        </div>
                    </div>
                </div>

                <footer className="mt-12 text-center">
                    <p className="text-slate-400 text-xs font-medium">
                        Sistema de Gestión v1.0 • {new Date().getFullYear()}
                    </p>
                </footer>
            </div>
        </main>
    );
}