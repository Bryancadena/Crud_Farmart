<?php

namespace App\Http\Controllers;

use App\Models\Producto;
use Illuminate\Http\Request;

class ProductoController extends Controller
{

    public function index()
    {
        // $user = Auth::user();
        // $user == null ? $view=redirect()->route('login'): $view= Producto::all();
        // return $view;
        return Producto::all();

    }

    public function store(Request $request)
    {
        $producto = new Producto();
        $producto->nombre=$request->nombre;
        $producto->precio=$request->precio;
        $producto->lote=$request->lote;
        $producto->vencimiento=$request->vencimiento;
        $producto->estado=$request->estado;

        $producto->save();

    }

    public function show(Producto $producto)
    {
        return Producto::find($producto);
    }

    public function edit(Request $request,$id)
    {
        $producto= Producto::findOrFall($request->id);
        $producto->nombre=$request->nombre;
        $producto->precio=$request->precio;
        $producto->lote=$request->lote;
        $producto->vencimiento=$request->vencimiento;
        $producto->estado=$request->estado;

        $producto->save();
        return $producto;
    }


    public function destroy($id)
    {
        return Producto::destroy($id);
    }
}
