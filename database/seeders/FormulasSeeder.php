<?php

namespace Database\Seeders;

use App\Models\formula;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FormulasSeeder extends Seeder
{

    public function run(): void
    {
        formula::factory(10)->create();
    }
}
