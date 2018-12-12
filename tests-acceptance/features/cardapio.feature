Feature: cardápio
    Como administrador da aplicação
    Eu desejo poder alterar os alimentos oferecidos para que eu possa organizar minhas vendas.

    Scenario: Nova comida cadastrada com sucesso
        Given Eu estou na página cardápio
        Given Estou com dia "seg" selecionado
        Given Não posso ver um alimento chamado "coxa de galinha" com tipo "Almoço"
        When Eu tento cadastrar um alimento chamado "coxa de galinha" com tipo "Almoço"
        Then Eu recebo uma mensagem de "Alimento cadastrado com sucesso"
        Then Posso ver o alimento "coxa de galinha" na lista de alimentos oferecidos para "Almoço"

    Scenario: Nova comida vazia não cadastrada
        Given Eu estou na página cardápio
        Given Estou com dia "ter" selecionado
        When Eu tento cadastrar um alimento chamado "" com tipo "Jantar"
        Then Eu recebo uma mensagem de "Não foi possível realizar o cadastro"

    Scenario: Nova comida não cadastrada
        Given Eu estou na página cardápio
        Given Estou com dia "qua" selecionado
        Given Posso ver um alimento chamado "sopa" com tipo "Jantar" cadastrado
        When Eu tento cadastrar um alimento chamado "sopa" com tipo "Jantar"
        Then Eu recebo uma mensagem de "Não foi possível realizar o cadastro"

    Scenario: Seleção de alimento com sucesso
        Given Eu estou na página cardápio
        Given Estou com dia "seg" selecionado
        Given Posso ver um alimento chamado "bife a milanesa" com tipo "Almoço" cadastrado
        When Eu tento selecionar um alimento chamado "bife a milanesa" com tipo "Almoço"
        Then Eu recebo uma mensagem de "Alimento Selecionado com sucesso"

    Scenario: Seleção de alimento com falha
        Given Eu estou na página cardápio
        Given Estou com dia "dom" selecionado
        Given Não posso ver um alimento chamado "bife" com tipo "Jantar"
        When Eu tento selecionar um alimento chamado "bife" com tipo "Jantar"
        Then Eu recebo uma mensagem de "Não foi possível selecionar o alimento"

    Scenario: Remoção de alimento sem seleção
        Given Eu estou na página cardápio
        Given Estou com dia "dom" selecionado
        Given Posso ver um alimento chamado "pão com ovo" com tipo "Desjejum" cadastrado
        When Eu tento remover um alimento chamado "pão com ovo" com tipo "Desjejum"
        Then Eu recebo uma mensagem de "Não foi possível remover o alimento"
        Then Posso ver o alimento "pão com ovo" na lista de alimentos oferecidos para "Desjejum"
