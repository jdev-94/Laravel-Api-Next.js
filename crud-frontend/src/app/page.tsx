"use client";
import { useEffect, useState } from "react";
import client from "@/src/lib/axios";
import { Producto } from "@/src/types/index";

export default function Home() {
  const [productos, setProductos] = useState<Producto[]>([]);

  const fetchProductos = async () => {
    try {
      const response = await client.get<Producto[]>("/productos");
      setProductos(response.data);
    } catch (error) {
      console.error("Error cargando productos:", error);
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
    <main className="p-10 bg-gray-50 min-h-screen text-slate-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Inventario de Produtos</h1>

        <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-slate-800 text-white">
              <tr>
                <th className="p-4">Nombre</th>
                <th className="p-4">Precio</th>
                <th className="p-4 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((producto) => (
                <tr key={producto.id} className="border-b hover:bg-gray-50 transition">
                  <td className="p-4 font-medium">{producto.nombre}</td>
                  <td className="p-4 text-emerald-600 font-bold">${producto.precio}</td>
                  <td className="p-4 text-center">
                    <button
                      onClick={() => eliminarProducto(producto.id)}
                      className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-md transition"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {productos.length === 0 && (
            <p className="p-10 text-center text-gray-500">No products found. Make sure Laravel is running and seeded.</p>
          )}
        </div>
      </div>
    </main>
  );
}