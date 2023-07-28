<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\formula;
use App\Models\Producto;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class DetalleFormulaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $formulaId = formula::inRandomOrder()->first()->id;
        $productoId = Producto::inRandomOrder()->first()->id_productos;
        return [
            'fk_id_formula' => $formulaId,
            'fk_id_producto' => $productoId,
            'cantidad' => $this->faker->randomNumber(2),
            'valor' => $this->faker->randomFloat(2, 1, 100),
        ];
    }
}
