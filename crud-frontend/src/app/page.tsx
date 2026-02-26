"use client";
import { useEffect, useState } from "react";
import client from "@/src/lib/axios";
import { Producto } from "@/src/types/index";
import Link from "next/link";

export default function Home() {

  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProductos = async () => {
    setLoading(true);
    try {
      const response = await client.get<Producto[]>("/productos");
      setProductos(response.data);
    } catch (error) {
      console.error("Error cargando productos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  const eliminarProducto = async (id: number) => {
    if (confirm("Estas seguro?")) {
      try {
        await client.delete(`/productos/${id}`);
        setProductos(productos.filter((p) => p.id !== id));
      } catch (error) {
        alert("Error eliminando el producto");
      }
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 p-6 md:p-12 text-slate-900">
      <div className="max-w-5xl mx-auto">

        {/* HEADER CON BOTÓN PROFESIONAL */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
              Inventario de Productos
            </h1>
            <p className="text-slate-500 mt-2 text-lg">
              Controla tu stock en tiempo real.
            </p>
          </div>

          <Link
            href="/products/create"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white px-8 py-3 rounded-2xl font-bold shadow-xl shadow-blue-200 transition-all duration-200"
          >
            <span className="text-2xl">+</span>
            Añadir Productos
          </Link>
        </div>

        {/* TABLA DE PRODUCTOS */}
        <div className="bg-white shadow-sm rounded-3xl overflow-hidden border border-slate-200">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-800 text-white">
              <tr>
                <th className="p-5 font-semibold uppercase text-xs tracking-wider">Producto</th>
                <th className="p-5 font-semibold uppercase text-xs tracking-wider">Precio</th>
                <th className="p-5 font-semibold uppercase text-xs tracking-wider text-center">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td colSpan={3} className="p-12 text-center text-slate-400 animate-pulse">
                    Loading inventory...
                  </td>
                </tr>
              ) : productos.map((producto) => (
                <tr key={producto.id} className="hover:bg-slate-50 transition-colors group">
                  <td className="p-5 font-medium text-slate-700">{producto.nombre}</td>
                  <td className="p-5">
                    <span className="text-emerald-600 font-bold bg-emerald-50 px-3 py-1 rounded-full">
                      ${Number(producto.precio).toFixed(2)}
                    </span>
                  </td>
                  <td className="p-5">
                    <div className="flex justify-center gap-3">
                      {/* BOTÓN EDITAR (Próximo paso) */}
                      <Link
                        href={`/products/${producto.id}/Editar`}
                        className="bg-amber-50 text-amber-600 hover:bg-amber-600 hover:text-white px-4 py-2 rounded-xl text-sm font-bold transition-all"
                      >
                        Editar
                      </Link>

                      <button
                        onClick={() => eliminarProducto(producto.id)}
                        className="bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white px-4 py-2 rounded-xl text-sm font-bold transition-all"
                      >
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {!loading && productos.length === 0 && (
            <div className="p-20 text-center">
              <div className="text-slate-300 text-6xl mb-4">📦</div>
              <p className="text-gray-500 font-medium">No products found. Start by adding a new one!</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}