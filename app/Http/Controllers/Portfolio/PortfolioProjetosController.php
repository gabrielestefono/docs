<?php

namespace App\Http\Controllers\Portfolio;

use App\Http\Controllers\Controller;
use App\Models\Portfolio\Projeto;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PortfolioProjetosController extends Controller
{
    public function index()
    {
        $projetos = Projeto::all();
        return Inertia::render('Projetos', [
            'projetos' => $projetos,
        ]);
    }
}
