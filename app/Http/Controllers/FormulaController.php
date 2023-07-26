<?php

namespace App\Http\Controllers;

use App\Models\formula;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class FormulaController extends Controller
{
    
    public function index()
    {
        $formulaConDetalle = formula::select('formulas.id',
                                            'clientes.identificacion',
                                            'clientes.nombres',
                                            'clientes.apellidos',
                                            'clientes.eps_cliente',
                                            'tf.descripcion',
                                            'formulas.observacion',
                                            'users.name'
                                            )
                                            ->join('clientes','clientes.id_clientes','formulas.fk_cliente')
                                            ->join('tipo_facturacions as tf','tf.id','formulas.fk_tipo_facturacion')
                                            ->join('users','users.id','formulas.id_usuario')
                                            ->get();
                                            
                return $formulaConDetalle;
    }


    public function store(Request $request)
    {
        
    }

    public function show(formula $formula)
    {
    
    }


    public function edit(formula $formula)
    {
        
    }

    public function destroy(formula $formula)
    {
        
    }
}
