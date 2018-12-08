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
Given(/^existe a opção “perguntas comuns”$/, async () => {
      
});
Given(/^existe uma pergunta cadastrada com título “Intolerância a lactose”$/, async () => {
   
});
When(/^o usuário acessa a pagina “perguntas comuns”$/, async () => {
    await $("a[name='perguntas comuns']").click();
});
When(/^o usuário seleciona o tipo de pergunta “alergias e intolerâncias”$/, async () => {
    await $("a[name='alergias e intolerãncias']").click();
});
When(/^o usuário confirma a seleção do tipo de perguntas$/, async () => {
    await $("a[name='confirmar seleção do tipo de perguntas']").click();
});
Then(/^o usuário pode ver a mensagem “Essas são as perguntas comuns sobre alergias e intolerâncias”$/, async () => {
 
});
Then(/^o usuário pode ver a pergunta “Intolerância a lactose”$/, async () => {
 
});
Then(/^o usuário pode ver a resposta “No restaurante universitário todas as comidas que possuem lactose na sua composição a especificam ao lado do nome na bandeja do alimento” relacionada a pergunta “Intolerância a lactose”$/, async () => {
 
});
})