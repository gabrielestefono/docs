<?php

namespace App\Http\Controllers\Portfolio;

use App\Http\Controllers\Controller;
use App\Models\Portfolio\Contato;
use App\Models\Portfolio\Mensagens;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PortfolioContatoController extends Controller
{
    public function index()
    {
        $meusContatos = Contato::first();
        return Inertia::render('Contato', [
            'contato' => $meusContatos,
        ]);
    }

    public function sendMessage(Request $request)
    {
        // Validação dos dados de entrada
        $request->validate([
            "nome" => 'required|string',
            "email" => "required|string|email",
            "whatsapp" => "required|string|regex:/^\+?[1-9]\d{1,14}$/",
            "orcamento" => "nullable|numeric",
            "mensagem" => "required|string"
        ], [
            'nome.required' => 'O campo nome é obrigatório.',
            'nome.string' => 'O campo nome deve ser um texto.',
            'email.required' => 'O campo email é obrigatório.',
            'email.email' => 'O campo email deve ser um endereço de email válido.',
            'whatsapp.required' => 'O campo whatsapp é obrigatório.',
            'whatsapp.string' => 'O campo whatsapp deve ser um texto.',
            'whatsapp.regex' => 'O campo whatsapp deve conter um número de telefone válido.',
            'orcamento.numeric' => 'O campo orcamento deve ser um número.',
            'mensagem.required' => 'O campo mensagem é obrigatório.',
            'mensagem.string' => 'O campo mensagem deve ser um texto.'
        ]);
        
        $mensagem = new Mensagens();
        $mensagem->fill($request->all());
        $mensagem->save();

        return response()->json(["mensagem" => "Mensagem enviada com sucesso!"], 201);
    }
}
