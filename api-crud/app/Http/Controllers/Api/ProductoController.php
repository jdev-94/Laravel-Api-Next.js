<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Producto;
use Illuminate\Http\Request;
use App\Http\Requests\StoreProductoRequest; //Imnportación para la validación

class ProductoController extends Controller
{
    /**
     * Listado de productos.
     */
    public function index()
    {
        return Producto::all();
    }

    /**
     * Crear Producto.
     */
    public function store(StoreProductoRequest $request)
    {
        //Validamos que los datos sean correctos antes de guardar
        $producto = Producto::create($request->validated());
        return response()->json($producto, 201);
    }

    /**
     * Mostramos un producto.
     */
    public function show(Producto $producto)
    {
        return $producto;
    }

    /**
     * Actualizamos un producto.
     */
    public function update(StoreProductoRequest $request, Producto $producto)
    {
        $producto->update($request->validated());
        return response()->json($producto);
    }

    /**
     * Eliminar un producto.
     */
    public function destroy(Producto $producto)
    {
        $producto->delete();
        return response()->json(['mensaje' => 'Eliminado'], 200);
    }
}
