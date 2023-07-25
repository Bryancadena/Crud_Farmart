<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ProductoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('productos')->insert([
           
            'nombre'=> Str::random(10),			
            'precio'=> rand(100, 100000),			
            'lote'=>	Str::random(10),			
            'vencimiento'=>now()->addDays(rand(1, 365)),			
            'estado'=>	rand(0,1) 		
            
        ]);
    }
}
