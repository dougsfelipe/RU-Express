Feature: Suporte
        Como um usuário ou administrador
        Eu quero cadastrar ou obter informações e poder realizar reclamações, sugestões ou tirar dúvidas 

GUI:Cenário :visualizar informações sobre o restaurante universitário
Given o usuário está na página de “Suporte”
And existe a opção “informações sobre o restaurante”
And existem informações cadastradas sobre os ônibus que param próximo do restaurante
And existem informações cadastradas sobre horário de funcionamento do restaurante
When o usuário acessa a pagina “informações sobre o restaurante”
And o usuário seleciona o filtro de informação “ônibus”
And o usuário seleciona o filtro de informação “horário de funcionamento”
And o usuário confirma a seleção das informações
Then o usuário pode ver a mensagem “Essas são as informações sobre ônibus e horário de funcionamento relacionadas ao restaurante”
And o usuário pode ver “Rio doce CDU”,”Casa Amarela” e “San Martin” na tabela “ônibus”
And o usuário pode ver “desjejum 7:00-8:00” ,”almoço 10:30-14:30” e ”jantar 17:00-19:00” na tabela “horário de funcionamento”