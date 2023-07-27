<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DetalleFormula;

class DetalleFormulaController extends Controller
{
    public function show(Request $request)
    {
        $detalle= DetalleFormula::all()->where('fk_id_formula',$request->id);
        return $detalle;
    }

    public function update()
    {
       
    }

    public function destroy()
    {
      
    }
}
