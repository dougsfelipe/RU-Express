Feature: Como um usuario
         I want fazer solicitacao de quentinha
         So that eu posso ver minha solicitacao

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


