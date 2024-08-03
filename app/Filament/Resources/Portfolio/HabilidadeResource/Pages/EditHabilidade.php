<?php

namespace App\Filament\Resources\Portfolio\HabilidadeResource\Pages;

use App\Filament\Resources\Portfolio\HabilidadeResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditHabilidade extends EditRecord
{
    protected static string $resource = HabilidadeResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
