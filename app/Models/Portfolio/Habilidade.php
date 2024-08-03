<?php

namespace App\Models\Portfolio;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Habilidade extends Model
{
    use HasFactory;

    protected $table = 'portfolio.habilidades';

    protected $fillable = ["nome", "imagem", "alt"];
}
