<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductoController;

/**
 * Creamos las 5 rutas: GET,POST,PUT,DELETE
 * 
 */

Route::apiResource('productos', ProductoController::class);
