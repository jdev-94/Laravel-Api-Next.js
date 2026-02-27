"use client";
import { useEffect, useState } from "react";
import client from "@/src/lib/axios";
import { Producto } from "@/src/types/index";
import Link from "next/link";

export default function homePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-950 mb-6">
          Gestor de <span className="text-blue-600">Productos</span>
        </h1>
        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
          Bienvenido al sistema centralizado de gestión. Desde aquí puedes visualizar todo tu inventario o añadir nuevos artículos de forma rápida.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/products/all"
            className="inline-flex items-center justify-center bg-white border border-slate-200 text-slate-900 font-semibold py-3 px-8 rounded-xl shadow-sm hover:bg-slate-100 transition-all text-lg"
          >
            📋 Ver Productos
          </Link>

          <Link
            href="/products/create"
            className="inline-flex items-center justify-center bg-blue-600 text-white font-semibold py-3 px-8 rounded-xl shadow-sm hover:bg-blue-700 transition-all text-lg"
          >
            ➕ Crear Producto
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="text-lg font-bold mb-2">⚡ Rápido</h3>
            <p className="text-slate-600">Interfaz optimizada con Next.js 14.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="text-lg font-bold mb-2">🛡️ Seguro</h3>
            <p className="text-slate-600">Validación de datos en backend y frontend.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="text-lg font-bold mb-2">📊 Organizado</h3>
            <p className="text-slate-600">CRUD completo para tu inventario.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
