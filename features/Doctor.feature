# language: pt

Funcionalidade: Doctor
    Como um Medico
    Eu devo verificar a saude de todos viajantes
    E Mantelos com saudevel para seguir viajem

Contexto:
    Dado um nome ao Medico de "Inri"
    E sempre inicio a viajem saudavel
    E sempre inicio com 2 refeições

Cenário: Verificar saude dos viajantes nao saudaveis
    Quando o Medico parar para verificar a saude dos viajantes
    E o Medico encontrar algum viajante nao saudavel
    Entao o Medico cura esse viajente e perde uma refeição


Cenário: pedir ajuda ao caçador para continuar
    Quando o Medico pedir 1 refeição ao Caçador
    Entao o medico ganha essa refeição

Cenário: pedir ajuda ao Caçador e nao conseguir
    Quando o Medico pedir ajuda o caçador
    E o cacador estiver menos de 2 refeicoes
    Entao o Medico decreta quarentena e para a viaje

