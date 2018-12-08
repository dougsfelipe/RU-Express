Feature: Como um usuario
         I want fazer solicitacao de quentinha
         So that eu posso ver minha solicitacao

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