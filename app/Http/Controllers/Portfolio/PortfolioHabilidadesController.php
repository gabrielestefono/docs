<?php

namespace App\Http\Controllers\Portfolio;

use App\Http\Controllers\Controller;
use App\Models\Portfolio\Habilidade;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PortfolioHabilidadesController extends Controller
{
    public function buscarTextoInicial($nomePagina): string{
        // TODO: Fazer essa parte após o #9
        return "";
    }
    public function index()
    {
        $habilidades = Habilidade::all();
        return Inertia::render('Habilidades', [
            'habilidades' => $habilidades,
        ]);
    }
}
