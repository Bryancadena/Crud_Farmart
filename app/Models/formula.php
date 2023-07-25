<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class formula extends Model
{
    use HasFactory;
    protected $fillable=['fk_cliente','fk_tipo_facturacion','observacion','id_usuario'];
}
