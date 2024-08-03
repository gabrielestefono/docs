<?php

namespace App\Filament\Resources\Portfolio\SobreResource\Pages;

use App\Filament\Resources\Portfolio\SobreResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditSobre extends EditRecord
{
    protected static string $resource = SobreResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
