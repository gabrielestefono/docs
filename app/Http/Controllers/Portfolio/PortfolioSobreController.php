<?php

namespace App\Http\Controllers\Portfolio;

use App\Http\Controllers\Controller;
use App\Models\Portfolio\Sobre;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PortfolioSobreController extends Controller
{
    public function index()
    {
        $sobre = Sobre::all();
        return Inertia::render('Sobre', [
            'sobre' => $sobre
        ]);
    }
}
