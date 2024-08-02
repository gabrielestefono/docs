<?php

use App\Http\Controllers\Spring\PdfSpringController;
use App\Http\Controllers\spring\SpringHomeController;
use Illuminate\Support\Facades\Route;

// Route::domain('webestcoding.local')->group(function () {
//     Route::get('/', [SpringHomeController::class, 'index']);
//     Route::group(['prefix' => 'pdf'], function () {
//         Route::get('/view_pdf/{slug?}', [PdfSpringController::class, 'index'])->where('slug', '.*');
//         Route::get('/generate_pdf/{slug?}', [PdfSpringController::class, 'generatePdf'])->where('slug', '.*');
//     });
//     Route::get('/{slug?}', [SpringHomeController::class, 'show'])->where('slug', '.*');
// });
