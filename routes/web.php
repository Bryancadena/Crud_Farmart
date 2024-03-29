<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controller\FormulaController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::redirect('/', 'login'); // Redireccionar directamente desde '/' a '/login'
Route::get('login', function () {
    return Inertia::render('Login');
})->name('login');


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::get('/facturacion', function () {
    return Inertia::render('Formula/ShowFormula');
})->middleware(['auth', 'verified'])->name('Facturacion');

Route::get('/productos', function () {
    return Inertia::render('Products/ShowProduct');
})->middleware(['auth', 'verified'])->name('productos');

Route::get('/clientes', function () {
    return Inertia::render('Clientes/ShowClientes');
})->middleware(['auth', 'verified'])->name('clientes');

Route::get('/usuarios', function () {
    return Inertia::render('Users/ShowUsers');
})->middleware(['auth', 'verified'])->name('usuarios');



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



require __DIR__.'/auth.php';
