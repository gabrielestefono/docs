<?php

namespace App\Models\Portfolio;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sobre extends Model
{
    use HasFactory;

    protected $table = "portfolio.sobres";

    protected $fillable = [
        'titulo',
        'texto',
        'imagem',
        'alt',
    ];
}
