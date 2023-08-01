<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Model\tipoFacturacion;
use Carbon\Carbon;
use Faker\Generator as Faker;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\TipoFacturacion>
 */
class TipoFacturacionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'descripcion' =>$this->faker->randomElement(['EVENTO', 'CAPITACION']),
            'updated_at' => Carbon::now(),
        ];
    }
}
