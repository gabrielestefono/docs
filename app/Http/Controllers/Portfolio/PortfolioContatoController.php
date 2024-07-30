<?php

namespace App\Http\Controllers\Portfolio;

use App\Http\Controllers\Controller;
use App\Models\Portfolio\Contato;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PortfolioContatoController extends Controller
{
    public function index()
    {
        $meusContatos = Contato::first();
        return Inertia::render('Contato', [
            'contato' => $meusContatos,
        ]);
    }
}
