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
        Schema::create('portfolio.mensagens', function (Blueprint $table) {
            $table->id();
            $table->string("nome");
            $table->string("whatsapp");
            $table->string("email");
            $table->string("orcamento")->nullable();
            $table->text("mensagem");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('portfolio.mensagens');
    }
};
