<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Producto;
use Illuminate\Http\Request;

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
    public function store(Request $request)
    {
        //Validamos que los datos sean correctos antes de guardar
        $validate = $request->validate([
            'nombre' => 'required|string|max:255',
            'precio' => 'required|numeric|min:10',
        ]);

        $producto = Producto::create($validate);

        //Devolvemos el producto creado con un código 201(creado)
        return response()->json([
            'msj' => 'Producto creado con éxito',
            'data' => $producto
        ], 201);
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
    public function update(Request $request, Producto $producto)
    {
        $producto->update($request->all());
        return $producto;
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
