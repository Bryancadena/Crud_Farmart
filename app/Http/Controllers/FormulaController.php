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
        return formula::all();
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
