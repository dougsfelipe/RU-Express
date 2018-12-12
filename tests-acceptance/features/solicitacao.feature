Feature: Como um stakeholder da aplicação 
         I  eu desejo solicitar uma quentinha escolhendo a refeição,seu tipo e 
         o lugar de entrega ou cadastrar um entregador na lista de entregadores disponíveis.
         So that eu posso ver minha solicitacao e a lista de entregadores

Scenario: Pedido feito fora do horário de funcionamento
Given Eu estou na pagina de solicitacao de quentinhas
Given eu tenho "2,00" na carteria
Given O Horario é "14:15"
Given O entregador "Carlos" esta cadastrado no sistema 
When Eu tento solicitar uma quentinha com o tipo "Almoco"
When Eu tento solicitar uma quentinha com a refeicao "Almondega"
When Eu tento solicitar uma quentinha com local de entrega no centro "Cin"
When Eu clico no botao de Solicitação
Then Eu vejo uma mesagem avisando que o pedido nao foi realizado pois foi feito fora do horario de funcionamento


Scenario: Pedido feito com saldo insuficiente
Given Eu estou na pagina de solicitacao de quentinhas
Given eu tenho "2,00" na carteria
Given O Horario é "15:15"
Given O entregador "Carlos" esta cadastrado no sistema 
When Eu tento solicitar uma quentinha com o tipo "Almoco"
When Eu tento solicitar uma quentinha com a refeicao "Lasanha"
When Eu tento solicitar uma quentinha com local de entrega no centro "CCEN"
When Eu clico no botao de Solicitação
Then Eu vejo uma mesagem avisando que o pedido nao foi realizado pois tem saldo insuficiente

Scenario: Solicitação de quentinha bem sucedida
Given Eu estou na pagina de solicitacao de quentinhas
Given eu tenho "50,00" na carteria
Given O Horario é "14:15"
Given O entregador "Carlos" esta cadastrado no sistema 
When Eu tento solicitar uma quentinha com o tipo "Jantar"
When Eu tento solicitar uma quentinha com a refeicao "Cafe"
When Eu tento solicitar uma quentinha com local de entrega no centro "CAC"
When Eu clico no botao de Solicitação
Then Eu vejo uma mesagem de comfirmacao que o pedido foi feito com suceso com tempo de espera estimado em "15:00"

Scenario: Cadastro de Entregador de Quentinha
Given  Eu estou na pagina de solicitacao de quentinhas
Given Eu não posso ver um entregador com nome "Carlos" na lista de entregadores
Given Eu não posso ver um entregar com cpf "459863125487" na lista de entregadores
When Eu tendo cadastrar o entregador com nome "Carlos" cpf "459863125487" telefone "8179866541" e email "carlos@mail"
When Eu clico no botao de cadastrar entregador
Then Eu consigo visualizar o entregador "Carlos " com CPF "459863125487" numero "8179866541" e email "carlos@mail" na lista de entregadores