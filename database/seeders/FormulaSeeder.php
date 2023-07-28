<?php

namespace Database\Seeders;

use App\Models\formula;
use App\Models\Clientes;
use App\Models\TipoFacturacion;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FormulaSeeder extends Seeder
{

    public function run(): void
    {
        
        $tipoFacturacionId = TipoFacturacion::inRandomOrder()->first()->id;
        $userId = User::inRandomOrder()->first()->id;

        formula::factory(10)->create([
            'fk_cliente' => Clientes::inRandomOrder()->first()->identificacion,
            'fk_tipo_facturacion' => $tipoFacturacionId,
            'id_usuario' => $userId,
        ]);
    }
}
