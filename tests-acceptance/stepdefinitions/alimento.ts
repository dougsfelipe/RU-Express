import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));

defineSupportCode(function ({ Given, When, Then }) {
    Given(/^Eu estou na página cardápio$/, async () => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal('RU Express');
        await $("a[name='cardapioNav']").click();
    });

    Given(/^Estou com dia "([^\"]*)" selecionado$/, async(dia)=>{
        let sel = "#cardapioDiaSelect option[value="+dia+"]";
        await $(sel).click();
    });

    Given(/^Não posso ver um alimento chamado "([^\"]*)" com tipo "([^\"]*)"$/, async(nome,tipo)=>{
        let findName = tipo+"Lista";
        let allNomes : ElementArrayFinder = element.all(by.name(findName));
        await allNomes;
        let sameNomes = allNomes.filter(elem => elem.getText().then(text => text === nome));
        await sameNomes;
        await sameNomes.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(0));
    });

    Given(/^Posso ver um alimento chamado "([^\"]*)" com tipo "([^\"]*)" cadastrado$/, async(nome, tipo)=>{
        //se já estiver cadastrado não fará diferença, mas para garantir que está, é feito o cadastro.
        await $("input[name='alimentoNome']").sendKeys(<string> nome);
        let sel = "#alimentoTipo option[value="+tipo+"]";
        await $(sel).click();
        await element(by.buttonText('Cadastrar')).click();
        let findName = tipo+"Lista";
        let allNomes : ElementArrayFinder = element.all(by.name(findName));
        await allNomes;
        let sameNomes = allNomes.filter(elem => elem.getText().then(text => text === nome));
        await sameNomes;
        await sameNomes.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });

    When(/^Eu tento cadastrar um alimento chamado "([^\"]*)" com tipo "([^\"]*)"$/, async(nome, tipo)=>{
        await $("input[name='alimentoNome']").sendKeys(<string> nome);
        let sel = "#alimentoTipo option[value="+tipo+"]";
        await $(sel).click();
        await element(by.buttonText('Cadastrar')).click();
    });

    Then(/^Eu recebo uma mensagem de "([^\"]*)"$/, async(mensagem)=>{
        let allMSG : ElementArrayFinder = element.all(by.name('mensagemCardapio'));
        await allMSG;
        let sameMSG = allMSG.filter(elem => elem.getText().then(text => text === mensagem));
        await sameMSG;
        await sameMSG.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });

    Then(/^Posso ver o alimento "([^\"]*)" na lista de alimentos oferecidos para "([^\"]*)"$/, async(nome, tipo)=>{
        let findName = tipo+"Lista";
        let allNomes : ElementArrayFinder = element.all(by.name(findName));
        await allNomes;
        let sameNomes = allNomes.filter(elem => elem.getText().then(text => text === nome));
        await sameNomes;
        await sameNomes.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });

})