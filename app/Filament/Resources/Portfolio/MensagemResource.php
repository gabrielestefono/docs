<?php

namespace App\Filament\Resources\Portfolio;

use App\Filament\Resources\Portfolio\MensagemResource\Pages;
use App\Filament\Resources\Portfolio\MensagemResource\RelationManagers;
use App\Models\Portfolio\Mensagem;
use App\Models\Portfolio\Mensagens;
use Filament\Forms;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class MensagemResource extends Resource
{
    protected static ?string $model = Mensagens::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Textarea::make('mensagem')->disabled(),
            ])->columns(1);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('id')
                    ->sortable(),
                TextColumn::make('nome')
                    ->searchable(),
                TextColumn::make('whatsapp')
                    ->copyable(),
                TextColumn::make('email')
                    ->copyable(),
                TextColumn::make('orcamento'),
                TextColumn::make('mensagem'),
            ])
            ->filters([
                //
            ])
            ->actions([])
            ->bulkActions([]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListMensagems::route('/'),
            'edit' => Pages\EditMensagem::route('/{record}'),
        ];
    }

    public static function canCreate(): bool
    {
        return false;
    }
}
