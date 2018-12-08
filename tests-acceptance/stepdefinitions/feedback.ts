import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));

 defineSupportCode(function ({ Given, When, Then }) {
     Given(/^O usuario carlos está na pagina de suporte$/, async () => {
        await browser.get("http://localhost:4200/suporte");
        await expect(browser.getTitle()).to.eventually.equal('RU Express');
    })
    Given(/^existe a opção “feedback”$/, async () => {
        
    });
     When(/^o usuário “carlos” acessa a pagina de “feedbacks”$/, async () => {
        await $("a[name='feedback']").click();
    });
    When(/^o usuário cria um feedback com título “Catraca quebrada”$/, async () => {
        await $("a[name='criar feedback']").click();
    });
    When(/^o usuário preenche a mensagem do feedback com “Notifico que a segunda catraca está com problemas e por isso a fila se estendeu a uma área sem proteção solar”$/, async () => {
       
    });
    When(/^o usuário envia o feedback$/, async () => {
        await $("a[name='enviar feedback']").click();
    });
     Then(/^o usuário “carlos” pode ver uma mensagem relatando que o feedback foi enviado com sucesso$/, async () => {
     
    });
    Then(/^o usuário pode ver o seu feedback criado na tabela de “feedbacks”$/, async () => {
     
    });
 })