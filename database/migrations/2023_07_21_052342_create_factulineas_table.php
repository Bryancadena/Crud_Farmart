<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('factulineas', function (Blueprint $table) {
            $table->id('id');
            $table->unsignedBigInteger('fk_id_formula');
            $table->foreign('fk_id_formula')->references('id')->on('formulas');
            $table->unsignedBigInteger('fk_id_producto');
            $table->foreign('fk_id_producto')->references('id_productos')->on('productos');
            $table->integer('cantidad');
            $table->float('valor');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        $table->dropForeign(['fk_id_formula']);
        $table->dropColumn('fk_id_formula');
        $table->dropForeign(['fk_id_producto']);
        $table->dropColumn('fk_id_producto');
    }
};
