<?php

namespace App\Http\Controllers;

use App\Models\Facturacion;
use Illuminate\Http\Request;

class FacturaController extends Controller
{

    public function index()
    {
        return Facturacion::all();
    }

   
    public function store(Request $request)
    {
        $factura=new Factura();
      
    }

   
    public function show(string $id)
    {
       
    }

   
    public function update(Request $request, string $id)
    {
        
    }

    
    public function destroy(string $id)
    {
        
    }
}
