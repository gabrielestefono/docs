<?php

namespace App\Filament\Resources\Portfolio;

use App\Filament\Resources\Portfolio\HabilidadeResource\Pages;
use App\Filament\Resources\Portfolio\HabilidadeResource\RelationManagers;
use App\Models\Portfolio\Habilidade;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class HabilidadeResource extends Resource
{
    protected static ?string $model = Habilidade::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make("nome"),
                FileUpload::make("imagem"),
                TextInput::make("alt"),
            ])->columns(1);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('id'),
                TextColumn::make('nome'),
                ImageColumn::make('imagem'),
                TextColumn::make('alt'),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
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
            'index' => Pages\ListHabilidades::route('/'),
            'create' => Pages\CreateHabilidade::route('/create'),
            'edit' => Pages\EditHabilidade::route('/{record}/edit'),
        ];
    }
}
