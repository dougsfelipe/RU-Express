import { defineSupportCode} from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));


defineSupportCode(function ({ Given, When, Then }) {
    Given(/^Eu estou na pagina de solicitacao de quentinhas$/, async () => {
        await browser.get("http://localhost:4200/solicitacao");
        await expect(browser.getTitle()).to.eventually.equal('RU Express');
    })

Given(/^eu tenho "(\d*)" na carteria$/, async (saldo) => {
        
    });

Given(/^O Horario é "(\d*)"$/, async (hora) => {
        
    });

Given(/^O entregador "(\d*)" esta cadastrado no sistema $/, async (name) => {
        
    });



When(/^Eu tento solicitar uma quentinha com o tipo"([^\"]*)"$/, async (tipo) => {
        await $("select[name='SelTipo']").sendKeys(<string> name);
    });

When(/^Eu tento solicitar uma quentinha com a refeicao"([^\"]*)"$/, async (refeica) => {
        await $("select[name='SelRef']").sendKeys(<string> name);
    });

When(/^Eu tento solicitar uma quentinha com local de entrega no centro"([^\"]*)"$/, async (entrega) => {
        await $("select[name='SelCentro']").sendKeys(<string> name);
    });

When(/^Eu clico no botao de solicitacao"([^\"]*)"$/, async (solicitacao) => {
        await element(by.buttonText('Solicitar')).click();
    });


Then(/^Eu vejo uma mesagem de comfirmacao que o pedido foi feito com suceso com tempo de espera estimado em "([^\"]*)"$/, async () => {
        
    });

    Then(/^Eu vejo uma mesagem avisando que o pedido nao foi realizado pois tem saldo insuficiente$/, async () => {
       
    });

    Then(/^Eu vejo uma mesagem avisando que o pedido nao foi realizado pois foi feito fora do horario de funcionamento$/, async () => {
       
    });

})
