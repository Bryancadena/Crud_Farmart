<?php

namespace App\Http\Controllers\clientes;

use App\Http\Controllers\Controller;
use App\Models\Clientes;
use Illuminate\Http\Request;

class Clientescontroller extends Controller
{
   
    public function index()
    {
         return Clientes::all();
    }

}
