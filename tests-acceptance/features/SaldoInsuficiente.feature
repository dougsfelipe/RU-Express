Feature: Como um usuario
         I want fazer solicitacao de quentinha
         So that eu posso ver minha solicitacao


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

