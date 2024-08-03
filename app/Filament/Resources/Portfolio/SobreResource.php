<?php

namespace App\Filament\Resources\Portfolio;

use App\Filament\Resources\Portfolio\SobreResource\Pages;
use App\Filament\Resources\Portfolio\SobreResource\RelationManagers;
use App\Models\Portfolio\Sobre;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\MarkdownEditor;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class SobreResource extends Resource
{
    protected static ?string $model = Sobre::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('titulo'),
                MarkdownEditor::make('texto'),
                FileUpload::make('imagem'),
                TextInput::make('alt'),
            ])->columns(1);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('id'),
                TextColumn::make('titulo'),
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
            'index' => Pages\ListSobres::route('/'),
            'create' => Pages\CreateSobre::route('/create'),
            'edit' => Pages\EditSobre::route('/{record}/edit'),
        ];
    }
}
