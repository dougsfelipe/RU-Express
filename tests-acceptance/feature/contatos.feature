Feature: Suporte
        Como um usuário ou administrador
        Eu quero cadastrar ou obter informações e poder realizar reclamações, sugestões ou tirar dúvidas 

GUI:Cenário :visualizar contatos
Given o usuário está na página de “Suporte”
And existe a opção “contatos”
And existe uma pessoa cadastrada com dados “Julia queiroz”,“81998763456”,“julia@gmail.com” em “nome”,”número de telefone” e “email” respectivamente
When o usuário acessa a pagina de “contatos”
And o usuário seleciona “Problemas com a digital” como necessidade do contato
And o usuário confirma a necessidade do contato
Then o usuário pode ver a mensagem “Contate esses funcionários para resolver sua necessidade”
And o usuário pode ver “Julia queiroz”,“81998763456”,“julia@gmail.com” nas colunas da tabela que são ”nome”,”número de telefone” e “email” respectivamente