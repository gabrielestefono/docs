<?php

namespace App\Filament\Resources\Portfolio\HabilidadeResource\Pages;

use App\Filament\Resources\Portfolio\HabilidadeResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListHabilidades extends ListRecords
{
    protected static string $resource = HabilidadeResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
