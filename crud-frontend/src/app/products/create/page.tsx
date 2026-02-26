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
            <div className="max-w-2xl mx-auto">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-blue-600 transition-all mb-8 group"
                >
                    <div className="p-2 rounded-full bg-white border border-slate-200 shadow-sm group-hover:border-blue-200 group-hover:bg-blue-50">
                        <span className="block group-hover:-translate-x-0.5 transition-transform">←</span>
                    </div>
                    Volver al panel principal
                </Link>

                {/* Card principal del formulario */}
                <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden">

                    {/* Encabezado decorativo dentro de la card */}
                    <div className="bg-slate-900 p-8 text-center md:text-left">
                        <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                            Registrar Nuevo Producto
                        </h1>
                        <p className="text-slate-400 mt-2 text-sm md:text-base">
                            Completa la información técnica y el precio para dar de alta el artículo en el sistema.
                        </p>
                    </div>

                    {/* Contenido del Formulario */}
                    <div className="p-6 md:p-10">
                        <div className="bg-slate-50/50 p-4 rounded-2xl border border-dashed border-slate-200 mb-6 text-center">
                            <span className="text-xs uppercase tracking-widest font-bold text-slate-400">
                                Información del Producto
                            </span>
                        </div>

                        <ProductForm onAdded={handleProductCreated} />
                    </div>
                </div>

                {/* Footer de ayuda (Opcional pero profesional) */}
                <p className="text-center text-slate-400 text-xs mt-8">
                    ¿Tienes dudas? Consulta el manual de gestión de inventario o contacta con soporte.
                </p>
            </div>
        </main>
    );
}