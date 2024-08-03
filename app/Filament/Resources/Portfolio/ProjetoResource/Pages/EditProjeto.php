<?php

namespace App\Filament\Resources\Portfolio\ProjetoResource\Pages;

use App\Filament\Resources\Portfolio\ProjetoResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditProjeto extends EditRecord
{
    protected static string $resource = ProjetoResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
