<?php

use App\Http\Controllers\Portfolio\PortfolioContatoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('/send-message', [PortfolioContatoController::class, 'sendMessage']);
