Feature: cardápio
    Como administrador da aplicação
    Eu desejo poder alterar os alimentos oferecidos para que eu possa organizar minhas vendas.

    Cenário: Nova comida cadastrada com sucesso
        Given Eu estou na página “cardápio”.
        And Estou com dia “seg” selecionado.
        And Não posso ver um alimento chamado "coxa de galinha" com tipo “Almoço”.
        When Eu tento cadastrar um alimento chamado "coxa de galinha" com tipo "Almoço".
        Then Eu recebo uma mensagem de "Alimento cadastrado com sucesso".
        And Posso ver o alimento "coxa de galinha" na lista de alimentos oferecidos para "Almoço".
        And Não posso ver as informações para cadastro “coxa de galinha” e “Almoço”.
