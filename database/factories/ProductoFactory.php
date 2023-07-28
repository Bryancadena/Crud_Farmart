<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Model\Producto;
use Carbon\Carbon;
use Faker\Generator as Faker;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Producto>
 */
class ProductoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [ 
            'nombre' =>$this->faker->word,
            'precio' => $this->faker->randomFloat(2, 1, 1000),
            'lote' => $this->faker->randomNumber(6),
            'vencimiento' => $this->faker->dateTimeBetween('+1 day', '+1 year'),
            'estado' => $this->faker->randomElement(['activo', 'inactivo']),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ];
    }
}
