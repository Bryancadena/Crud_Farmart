<?php

namespace App\Http\Controllers;

use App\Models\formula;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class FormulaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index():Response
    {
        return Inertia::render('Formulas/Index', [
            //
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(formula $formula)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(formula $formula)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, formula $formula)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(formula $formula)
    {
        //
    }
}
