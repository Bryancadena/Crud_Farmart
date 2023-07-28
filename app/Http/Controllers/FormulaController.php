<?php

namespace App\Http\Controllers;

use App\Models\DetalleFormula;
use App\Models\formula;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Termwind\Components\Dd;

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
                                            ->join('clientes','clientes.identificacion','formulas.fk_cliente')
                                            ->join('tipo_facturacions as tf','tf.id','formulas.fk_tipo_facturacion')
                                            ->join('users','users.id','formulas.id_usuario')
                                            ->get();
                                            
                return $formulaConDetalle;
    }


    public function store(Request $request)
    {
       
        $formula=new Formula;
        $formula->fk_cliente=$request['user']['identificacion'];
        $formula->fk_tipo_facturacion=$request['TipoFact'];
        $formula->observacion=$request['user']['observacion'];
        $formula->id_usuario=$request['user']['usuario'];
        $formula->save();
        $idFormula= $formula->id;

        $detalle= new DetalleFormula();
        foreach ($request['productos'] as $producto) {
        $detalle->fk_id_formula=$idFormula;
        $detalle->fk_id_producto=$producto['producto'];
        $detalle->cantidad=$producto['cantidad'];
        $detalle->valor=$producto['precio'];
        }

        return $detalle->save();
    }

    public function show($id)
    {
    return 1;
    }


    public function edit(Request $request)
    {
        return 1;
    }

    public function destroy($id)
    {
           $destroy=DetalleFormula::select('id')->where('fk_id_formula',$id)->get();
           $ids = [];
           foreach ($destroy as $resultado) {
            $ids[] = $resultado->id;
             }
           DetalleFormula::destroy($ids);
           Formula::destroy($id);
          
    }
}
