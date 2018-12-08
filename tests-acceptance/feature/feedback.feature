Feature: Suporte
        Como um usuário ou administrador
        Eu quero cadastrar ou obter informações e poder realizar reclamações, sugestões ou tirar dúvidas 

GUI:Cenário :envio de feedback com sucesso
Given o usuário está na página de “Suporte”
And existe a opção “feedback”
When o usuário “carlos” acessa a pagina de “feedbacks”
And o usuário cria um feedback com título “Catraca quebrada”
And o usuário preenche a mensagem do feedback com “Notifico que a segunda catraca está com problemas e por isso a fila se estendeu a uma área sem proteção solar”
And o usuário envia o feedback
Then o usuário “carlos” pode ver uma mensagem relatando que o feedback foi enviado com sucesso
And o usuário pode ver o seu feedback criado na tabela de “feedbacks”