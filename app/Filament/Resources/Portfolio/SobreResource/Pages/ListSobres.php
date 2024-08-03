<?php

namespace App\Filament\Resources\Portfolio\SobreResource\Pages;

use App\Filament\Resources\Portfolio\SobreResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListSobres extends ListRecords
{
    protected static string $resource = SobreResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
