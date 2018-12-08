Feature: Suporte
        Como um usuário ou administrador
        Eu quero cadastrar ou obter informações e poder realizar reclamações, sugestões ou tirar dúvidas

GUI:Cenário :visualizar perguntas comuns
Given o usuário está na página de “Suporte”
And existe a opção “perguntas comuns”
And existe uma pergunta cadastrada com título “Intolerância a lactose”
When o usuário acessa a pagina “perguntas comuns”
And o usuário seleciona o tipo de pergunta “alergias e intolerâncias”
And o usuário confirma a seleção do tipo de perguntas
Then o usuário pode ver a mensagem “Essas são as perguntas comuns sobre alergias e intolerâncias”
And o usuário pode ver a pergunta “Intolerância a lactose”
And o usuário pode ver a resposta “No restaurante universitário todas as comidas que possuem lactose na sua composição a especificam ao lado do nome na bandeja do alimento” relacionada a pergunta “Intolerância a lactose”