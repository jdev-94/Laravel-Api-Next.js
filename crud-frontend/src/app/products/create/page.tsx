"use client";
import ProductForm from "../../components/ProductForm";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CreateProductPage() {
    const router = useRouter();

    const handleProductCreated = () => {
        router.push("/");
    };

    return (
        <main className="min-h-screen bg-slate-50/50 p-4 md:p-12">
            <div className="max-w-3xl mx-auto p-4">
                {/* Navegación Superior */}
                <div className="flex gap-4 mb-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2.5 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors group"
                    >
                        <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm group-hover:border-blue-200 group-hover:bg-blue-50 transition-all">
                            <span className="block group-hover:-translate-x-0.5 transition-transform">←</span>
                        </div>
                        Volver al inicio
                    </Link>
                    <Link
                        href="/products/all"
                        className="inline-flex items-center gap-2.5 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors group"
                    >
                        <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm group-hover:border-blue-200 group-hover:bg-blue-50 transition-all">
                            <span className="block group-hover:translate-x-0.5 transition-transform">→</span>
                        </div>
                        Ver inventario
                    </Link>
                </div>

                {/* Card principal del formulario - Estilo Glassmorphism ligero */}
                <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">

                    {/* Encabezado decorativo mejorado */}
                    <div className="bg-slate-950 p-10 text-center md:text-left relative overflow-hidden">
                        {/* Círculo decorativo de fondo */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>

                        <div className="relative z-10">
                            <span className="inline-block bg-blue-600/20 text-blue-300 text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-3">
                                Nuevo Registro
                            </span>
                            <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tighter">
                                Añadir Producto
                            </h1>
                            <p className="text-slate-400 mt-2 text-sm md:text-base max-w-lg">
                                Introduce los detalles técnicos y el precio para dar de alta el artículo en el inventario central.
                            </p>
                        </div>
                    </div>

                    {/* Contenido del Formulario */}
                    <div className="p-8 md:p-12">
                        {/* Separador sutil */}
                        <div className="relative mb-10">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-slate-200"></div>
                            </div>
                            <div className="relative flex justify-center">
                                <span className="bg-white px-4 text-xs uppercase tracking-widest font-semibold text-slate-500">
                                    Detalles del Producto
                                </span>
                            </div>
                        </div>

                        <ProductForm onAdded={handleProductCreated} />
                    </div>
                </div>

                {/* Footer de ayuda mejorado */}
                <div className="text-center mt-10 p-4 bg-slate-100/50 rounded-2xl border border-slate-200/50">
                    <p className="text-slate-600 text-sm font-medium">
                        ¿Necesitas ayuda?
                        <a href="#" className="text-blue-600 hover:underline ml-1">Consulta la documentación</a> o contacta con soporte.
                    </p>
                </div>
            </div>
        </main>
    );
}