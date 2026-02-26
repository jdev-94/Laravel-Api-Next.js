<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Uso del comando php artisan make:request StoreProductoRequest para los FormRequest
 */

class StoreProductoRequest extends FormRequest
{
    /**
     * Damos acceso a la petición
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Establecemos los campos que serán obligatorios
     */
    public function rules(): array
    {
        return [
            'nombre' => 'required|string|max:255|min:3',
            'precio' => 'required|numeric|min:0',
        ];
    }

    /**
     * 
     * Personalizamos los mensajes de error
     * 
     */
    public function messages(): array
    {
        return [
            'nombre.required' => 'El nombre es obligatorio.',
            'nombre.min' => 'El nombre debe tener al menos :min caracteres.',
            'precio.required' => 'El precio es obligatorio.',
            'precio.numeric' => 'El precio debe ser un número válido.',
            'precio.min' => 'El precio no puede ser negativo.',
        ];
    }
}
