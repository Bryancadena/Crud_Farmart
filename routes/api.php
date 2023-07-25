<?php

use App\Http\Controllers\FormulaController;
use App\Http\Controllers\ProductoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(FormulaController::class)->group(function () {
    Route::get('/formulas', 'index');
    Route::post('/fromulas', 'store');
    Route::get('/formula/{id}', 'show');
    Route::put('/formula/{id}','update') ;
    Route::delete('/formula/{id}','destroy') ;

});

Route::controller(ProductoController::class)->group(function () {
    Route::get('/productos', 'index');
    Route::post('/productos', 'store');
    Route::get('/producto/{id}', 'show');
    Route::put('/producto/{id}','update') ;
    Route::delete('/producto/{id}','destroy') ;

});

