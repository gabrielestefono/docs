<?php

namespace App\Models\Portfolio;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mensagens extends Model
{
    use HasFactory;

    protected $table = 'portfolio.mensagens';

    protected $fillable = [
        'nome',
        'whatsapp',
        'email',
        'orcamento',
        'mensagem',
    ];
}
