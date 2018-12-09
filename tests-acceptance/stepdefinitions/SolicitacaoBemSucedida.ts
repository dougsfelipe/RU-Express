import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));
let sameName = ((elem, name) => elem.element(by.name('EntregadoresList')).getText().then(text => text === name));
let sameHour = ((elem, hour) => elem.element(by.name('QuentinhaList')).getText().then(text => text === hour));
let pAND = ((p, q) => p.then(a => q.then(b => a && b)))

defineSupportCode(function ({ Given, When, Then }) {
    Given(/^Eu estou na pagina de solicitacao de quentinhas$/, async () => {
        await browser.get("http://localhost:4200/solicitacao");
        await expect(browser.getTitle()).to.eventually.equal('RU Express');
    })

    Given(/^eu sou o usuario "(\d*)" com cpf "(\d*)" e tenho "(\d*)" na carteria$/, async (name, cpf, saldo) => {
        var usuarios: ElementArrayFinder = element.all(by.name('UserList'));
        await usuarios;
        var sameName = usuarios.filter(elem => elem.getText().then(text => text === name));
        await sameName;
        sameName = usuarios.filter(elem => elem.getText().then(text => text === cpf));
        await sameName;
        sameName = usuarios.filter(elem => elem.getText().then(text => text === saldo));
        await sameName.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));


    });

    Given(/^O Horario é "(\d*)"$/, async (hour) => {
        var quentinhas: ElementArrayFinder = element.all(by.name('QuentinhaList'));
        await quentinhas;
        var sameHour = quentinhas.filter(elem => elem.getText().then(text => text === hour ));
        await sameHour;
        await sameHour.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1)

    });

    Given(/^O entregador "(\d*)" esta cadastrado no sistema $/, async (name) => {
        var entregador: ElementArrayFinder = element.all(by.name('EntragadoresList'));
        await entregador;
        var sameName = entregador.filter(elem => elem.getText().then(text => text === name));
        await sameName;
        await sameName.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));

    });

    When(/^Eu tento solicitar uma quentinha com o tipo"([^\"]*)"$/, async (tipo) => {
        await $("select[name='SelTipo']").sendKeys(<string>tipo);
    });

    When(/^Eu tento solicitar uma quentinha com a refeicao"([^\"]*)"$/, async (refeicao) => {
        await $("select[name='SelRef']").sendKeys(<string>refeicao);
    });

    When(/^Eu tento solicitar uma quentinha com local de entrega no centro"([^\"]*)"$/, async (entrega) => {
        await $("select[name='SelCentro']").sendKeys(<string>entrega);
    });

    When(/^Eu clico no botao de solicitacao$/, async () => {
        await element(by.buttonText('Solicitar')).click();
    });


    Then(/^Eu vejo uma mesagem de comfirmacao que o pedido de "([^\"]*)" foi feito com suceso com tempo de espera estimado em "([^\"]*)"$/, async (name, hour) => {

        var quentinhas: ElementArrayFinder = element.all(by.name('QuentinhaList'));
        quentinhas.filter(elem => pAND(sameHour(elem, hour), sameName(elem, name)).then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1)));

    });

    Then(/^Eu vejo uma mesagem avisando que o pedido nao foi realizado pois foi feito fora do horario de funcionamento$/, async (name, hour) => {

        var quentinhas: ElementArrayFinder = element.all(by.name('QuentinhaList'));
        quentinhas.filter(elem => pAND(sameHour(elem, hour), sameName(elem, name)).then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(0)));

    });

    Then(/^Eu vejo uma mesagem avisando que o pedido nao foi realizado pois foi feito fora do horario de funcionamento$/, async (name, hour) => {

        var quentinhas: ElementArrayFinder = element.all(by.name('QuentinhaList'));
        quentinhas.filter(elem => pAND(sameHour(elem, hour), sameName(elem, name)).then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(0)));

    });



})