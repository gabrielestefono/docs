<?php

use App\Http\Controllers\Portfolio\PorfolioHomeController;
use App\Http\Controllers\Portfolio\PortfolioContatoController;
use App\Http\Controllers\Portfolio\PortfolioHabilidadesController;
use App\Http\Controllers\Portfolio\PortfolioProjetosController;
use App\Http\Controllers\Portfolio\PortfolioSobreController;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;
use Illuminate\Support\Facades\Route;

Route::get('/', [PorfolioHomeController::class, 'index']);
Route::get('/sobre', [PortfolioSobreController::class, 'index']);
Route::get('/projetos', [PortfolioProjetosController::class, 'index']);
Route::get('/habilidades', [PortfolioHabilidadesController::class, 'index']);
Route::get('/contato', [PortfolioContatoController::class, 'index']);
