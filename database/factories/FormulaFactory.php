<?php

namespace Database\Factories;

use App\Models\formula;
use App\Models\Clientes;
use App\Models\tipoFacturacion;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class FormulaFactory extends Factory
{

    protected $model=formula::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [

            'fk_cliente'=> Clientes::inRandomOrder()->first()->identificacion,
            'fk_tipo_facturacion'=>tipoFacturacion::inRandomOrder()->first()->id,
            'observacion'=>$this->faker->paragraph(),
            'id_usuario' =>User::inRandomOrder()->first()->id,
        ];
    }
}
