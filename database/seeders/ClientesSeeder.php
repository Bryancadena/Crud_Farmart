<?php

namespace Database\Seeders;

Use App\Models\Clientes;
Use App\Models\TipoFacturacion;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ClientesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
 
        Clientes::factory(10)->create();
    }
}
