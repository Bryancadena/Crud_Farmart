<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DetalleFormula;

class DetalleFormulaController extends Controller
{
    public function show(Request $request)
    {
        $detalle= DetalleFormula::select('factulineas.id',
                                        'factulineas.fk_id_formula',
                                        'productos.nombre',
                                        'factulineas.cantidad',
                                        'factulineas.valor'
                                        )
                                  ->join('productos','productos.id_productos','factulineas.fk_id_producto')
                                  ->where('fk_id_formula',$request->id)
                                  ->get();
        return $detalle;
    }

    public function update()
    {
       
    }

    public function destroy()
    {
      
    }
}
