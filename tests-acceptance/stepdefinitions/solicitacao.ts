import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));
let sameName = ((elem, name) => elem.element(by.name('EntregadoresList')).getText().then(text => text === name));
let sameHour = ((elem, hour) => elem.element(by.name('QuentinhaList')).getText().then(text => text === hour));
let sameCPF = ((elem, cpf) => elem.element(by.name('entregadoresList')).getText().then(text => text === cpf));
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

    Given(/^Eu não posso ver um entregar com cpf "(\d*)"na lista de entregadores$/, async (cpf) => {
        var allcpfs: ElementArrayFinder = element.all(by.name('cpflist'));
        await allcpfs;
        var samecpfs = allcpfs.filter(elem =>
            elem.getText().then(text => text === cpf));
        await samecpfs;
        await samecpfs.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(0));
    });

    Given(/^Eu não posso ver um entregar com nome "(\d*)"na lista de entregadores$/, async (nome) => {
        var allnames: ElementArrayFinder = element.all(by.name('nomelist'));
        await allnames;
        var samecpfs = allnames.filter(elem =>
            elem.getText().then(text => text === nome));
        await allnames;
        await allnames.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(0));
    });


    Given(/^O Horario é "(\d*)"$/, async (hour) => {
        var quentinhas: ElementArrayFinder = element.all(by.name('QuentinhaList'));
        await quentinhas;
        var sameHour = quentinhas.filter(elem => elem.getText().then(text => text === hour));
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



    When(/^Eu tento solicitar uma quentinha com o tipo"([^\"]*)"$/, async () => {
        await $("select[name='SelTipo']").sendKeys(<string>name);
    });

    When(/^Eu tento solicitar uma quentinha com a refeicao"([^\"]*)"$/, async () => {
        await $("select[name='SelRef']").sendKeys(<string>name);
    });

    When(/^Eu tento solicitar uma quentinha com local de entrega no centro"([^\"]*)"$/, async () => {
        await $("select[name='SelCentro']").sendKeys(<string>name);
    });

    When(/^Eu clico no botao de solicitacao"([^\"]*)"$/, async () => {
        await element(by.buttonText('Solicitar')).click();
    });

    When(/^Eu tendo cadastrar o entregador com nome "([^\"]*)" cpf "(\d*)" telefone "(\d*)" e email "(\d*)"$/, async (name, cpf,fone,mail) => {
        await $("input[name='EntregadorNome']").sendKeys(<string>name);
        await $("input[name='EntregadorCPF']").sendKeys(<string>cpf);
        await $("input[name='EntregadorTelefone']").sendKeys(<string>fone);
        await $("input[name='EntregadorEmail']").sendKeys(<string>mail);
        await element(by.buttonText('Cadastrar Entregador')).click();
    });


    Then(/^Eu vejo uma mesagem de comfirmacao que o pedido foi feito com suceso com tempo de espera estimado em "([^\"]*)"$/, async (hour) => {
        var quentinhas: ElementArrayFinder = element.all(by.name('QuentinhaList'));
        quentinhas.filter(elem => pAND(sameHour(elem, hour), sameName(elem, name)).then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1)));

    });


    Then(/^Eu vejo uma mesagem avisando que o pedido nao foi realizado pois foi feito fora do horario de funcionamento$/, async (hour) => {
        var quentinhas: ElementArrayFinder = element.all(by.name('QuentinhaList'));
        quentinhas.filter(elem => pAND(sameHour(elem, hour), sameName(elem, name)).then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(0)));

    });

    Then(/^Eu consigo visualizar o entregador"([^\"]*)" com CPF "(\d*)" numero "(\d*)"e email"(\d*)" na lista de entregadores$/, async (name, cpf,fone,mail) => {
        var allEntregadores : ElementArrayFinder = element.all(by.name('entregadoresList'));
        allEntregadores.filter(elem => pAND(sameCPF(elem,cpf),sameName(elem,name))).then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });

})
