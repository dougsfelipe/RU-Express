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
Given(/^existe a opção “informações sobre o restaurante”$/, async () => {
        
});
Given(/^existem informações cadastradas sobre os ônibus que param próximo do restaurante$/, async () => {
   
});
Given(/^existem informações cadastradas sobre horário de funcionamento do restaurante$/, async () => {
   
});
When(/^o usuário acessa a pagina “informações sobre o restaurante”$/, async () => {
    await $("a[name='informações sobre o restaurante']").click();
});
When(/^o usuário seleciona o filtro de informação “ônibus”$/, async () => {
    await $("a[name='ônibus']").click();
});
When(/^o usuário seleciona o filtro de informação “horário de funcionamento”$/, async () => {
    await $("a[name='horário de funcionamento']").click();
});
When(/^o usuário confirma a seleção das informações$/, async () => {
    await $("a[name='confirmar seleção de informações']").click();
});
Then(/^o usuário pode ver a mensagem “Essas são as informações sobre ônibus e horário de funcionamento relacionadas ao restaurante”$/, async () => {
 
});
Then(/^o usuário pode ver “Rio doce CDU”,”Casa Amarela” e “San Martin” na tabela “ônibus”$/, async () => {
 
});
Then(/^o usuário pode ver “desjejum 7:00-8:00” ,”almoço 10:30-14:30” e ”jantar 17:00-19:00” na tabela “horário de funcionamento”$/, async () => {
 
});
})