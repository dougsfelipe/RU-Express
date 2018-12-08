import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
 let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));
 let sameCPF = ((elem, cpf) => elem.element(by.name('cpflist')).getText().then(text => text === cpf));
let sameName = ((elem, name) => elem.element(by.name('nomelist')).getText().then(text => text === name));

 defineSupportCode(function ({ Given, When, Then }) {
     Given(/^O usuario carlos está na pagina de suporte$/, async () => {
        await browser.get("http://localhost:4200/Suporte");
        await expect(browser.getTitle()).to.eventually.equal('Suporte');
        
    })
     Given(/^o usuário está na página de “Suporte”$/, async () => {
       
    });
    Given(/^existe a opção “feedback”$/, async () => {
       
    });
     When(/^o usuário “carlos” acessa a pagina de “feedbacks”$/, async () => {
       
    });
    When(/^o usuário cria um feedback com título “Catraca quebrada”$/, async () => {
       
    });
    When(/^o usuário preenche a mensagem do feedback com “Notifico que a segunda catraca está com problemas e por isso a fila se estendeu a uma área sem proteção solar”$/, async () => {
       
    });
    When(/^o usuário envia o feedback$/, async () => {
       
    });
     Then(/^o usuário “carlos” pode ver uma mensagem relatando que o feedback foi enviado com sucesso$/, async () => {
     
    });
    Then(/^o usuário pode ver o seu feedback criado na tabela de “feedbacks”$/, async () => {
     
    });
    ________________________________
    Given(/^existe a opção “informações sobre o restaurante”$/, async () => {
       
    });
    Given(/^existem informações cadastradas sobre os ônibus que param próximo do restaurante$/, async () => {
       
    });
    Given(/^existem informações cadastradas sobre horário de funcionamento do restaurante$/, async () => {
       
    });
    When(/^o usuário acessa a pagina “informações sobre o restaurante”$/, async () => {
       
    });
    When(/^o usuário seleciona o filtro de informação “ônibus”$/, async () => {
       
    });
    When(/^o usuário seleciona o filtro de informação “horário de funcionamento”$/, async () => {
       
    });
    When(/^o usuário confirma a seleção das informações$/, async () => {
       
    });
    Then(/^o usuário pode ver a mensagem “Essas são as informações sobre ônibus e horário de funcionamento relacionadas ao restaurante”$/, async () => {
     
    });
    Then(/^o usuário pode ver “Rio doce CDU”,”Casa Amarela” e “San Martin” na tabela “ônibus”$/, async () => {
     
    });
    Then(/^o usuário pode ver “desjejum 7:00-8:00” ,”almoço 10:30-14:30” e ”jantar 17:00-19:00” na tabela “horário de funcionamento”$/, async () => {
     
    });
    ______________________________________
    Given(/^existe a opção “perguntas comuns”$/, async () => {
       
    });
    Given(/^existe uma pergunta cadastrada com título “Intolerância a lactose”$/, async () => {
       
    });
    When(/^o usuário acessa a pagina “perguntas comuns”$/, async () => {
       
    });
    When(/^o usuário seleciona o tipo de pergunta “alergias e intolerâncias”$/, async () => {
       
    });
    When(/^o usuário confirma a seleção do tipo de perguntas$/, async () => {
       
    });
    Then(/^o usuário pode ver a mensagem “Essas são as perguntas comuns sobre alergias e intolerâncias”$/, async () => {
     
    });
    Then(/^o usuário pode ver a pergunta “Intolerância a lactose”$/, async () => {
     
    });
    Then(/^o usuário pode ver a resposta “No restaurante universitário todas as comidas que possuem lactose na sua composição a especificam ao lado do nome na bandeja do alimento” relacionada a pergunta “Intolerância a lactose”$/, async () => {
     
    });
    ______________________________________________________
    Given(/^existe a opção “contatos”$/, async () => {
       
    });
    Given(/^existe uma pessoa cadastrada com dados “Julia queiroz”,“81998763456”,“julia@gmail.com” em “nome”,”número de telefone” e “email” respectivamente$/, async () => {
       
    });
    When(/^o usuário acessa a pagina de “contatos”$/, async () => {
       
    });
    When(/^o usuário seleciona “Problemas com a digital” como necessidade do contato$/, async () => {
       
    });
    When(/^o usuário confirma a necessidade do contato$/, async () => {
       
    });
    Then(/^o usuário pode ver a mensagem “Contate esses funcionários para resolver sua necessidade”$/, async () => {
     
    });
    Then(/^o usuário pode ver “Julia queiroz”,“81998763456”,“julia@gmail.com” nas colunas da tabela que são ”nome”,”número de telefone” e “email” respectivamente$/, async () => {
     
    });
 })