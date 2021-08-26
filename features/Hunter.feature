# language: pt

Funcionalidade: Hunter
    Como um Caçador
    Eu consigo mais refeições ao caçar
    Eu Consigo passar refeições aos viajantes
    Para poder seguir a viajem saudaveis

Contexto: 
    Dado um nome ao Caçador de "Eduardo"
    E ele sempre inicia com 2 refeições
    E ele sempre inicia a viajem saudavel.

Cenário: Ir caçar para conseguir alimento
    Quando o Caçador sair para caçar 2 vezes
    Entao ele deve ter 12 refeições

Cenário: Comer para Continuar viajem com saude
    Quando o Caçador sair para caçar 2 vezes
    E o Caçador parar para comer 2 vezes
    Entao o Caçador deve ter 8 refeições

Cenário: Comer e nao conseguir seguir viajem
    Quando o Caçador parar para comer 1 vezes
    Entao o Caçador deve ter menos de 2 refeições

Cenário: Ajudar Viajantes com refeicoes
    Quando o Caçador doar 2 refeições
    Entao o Caçador deve ter 6 refeições
