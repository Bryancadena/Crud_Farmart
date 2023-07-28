<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Clientes;
use App\Models\TipoFacturacion;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Clientes>
 */
class ClientesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
       
        $tipoFacturacionId = TipoFacturacion::inRandomOrder()->first()?->id ?? 1;
        $contacto = $this->faker->regexify('^(\+1|1)?\s?\(\d{3}\)\s?\d{3}\-\d{4}$');
        $contacto = substr(preg_replace('/\D/', '', $contacto), 0, 20);
        return [
            'identificacion'=> $this->faker->randomNumber(9),
            'tipo_identificacion' =>  $tipoFacturacionId,
            'nombres' => $this->faker->name,
            'apellidos' => $this->faker->lastName,
            'eps_cliente' => $this->faker->word,
            'contacto' => $contacto,
            'estado' => $this->faker->randomElement(['activo', 'inactivo']),
            'id_usuario' => User::inRandomOrder()->first()->id,
        ];
    }
}
