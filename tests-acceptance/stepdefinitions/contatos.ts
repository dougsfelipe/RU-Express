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
Given(/^existe a opção “contatos”$/, async () => {
       
});
Given(/^existe uma pessoa cadastrada com dados “Julia queiroz”,“81998763456”,“julia@gmail.com” em “nome”,”número de telefone” e “email” respectivamente$/, async () => {
   
});
When(/^o usuário acessa a pagina de “contatos”$/, async () => {
    await $("a[name='contatos']").click();
});
When(/^o usuário seleciona “Problemas com a digital” como necessidade do contato$/, async () => {
    await $("a[name='problemas com a digital']").click();
});
When(/^o usuário confirma a necessidade do contato$/, async () => {
    await $("a[name='confirmar necessidade do contato']").click();
});
Then(/^o usuário pode ver a mensagem “Contate esses funcionários para resolver sua necessidade”$/, async () => {
 
});
Then(/^o usuário pode ver “Julia queiroz”,“81998763456”,“julia@gmail.com” nas colunas da tabela que são ”nome”,”número de telefone” e “email” respectivamente$/, async () => {
 
});
})