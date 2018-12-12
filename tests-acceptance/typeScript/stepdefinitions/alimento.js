"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));
cucumber_1.defineSupportCode(function ({ Given, When, Then }) {
    Given(/^Eu estou na página cardápio$/, () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:4200/");
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal('RU Express');
        yield protractor_1.$("a[name='cardapioNav']").click();
    }));
    Given(/^Estou com dia "([^\"]*)" selecionado$/, (dia) => __awaiter(this, void 0, void 0, function* () {
        let sel = "#cardapioDiaSelect option[value=" + dia + "]";
        yield protractor_1.$(sel).click();
    }));
    Given(/^Não posso ver um alimento chamado "([^\"]*)" com tipo "([^\"]*)"$/, (nome, tipo) => __awaiter(this, void 0, void 0, function* () {
        let findName = tipo + "Lista";
        let allNomes = protractor_1.element.all(protractor_1.by.name(findName));
        yield allNomes;
        let sameNomes = allNomes.filter(elem => elem.getText().then(text => text === nome));
        yield sameNomes;
        yield sameNomes.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(0));
    }));
    Given(/^Posso ver um alimento chamado "([^\"]*)" com tipo "([^\"]*)" cadastrado$/, (nome, tipo) => __awaiter(this, void 0, void 0, function* () {
        //se já estiver cadastrado não fará diferença, mas para garantir que está, é feito o cadastro.
        yield protractor_1.$("input[name='alimentoNome']").sendKeys(nome);
        let sel = "#alimentoTipo option[value=" + tipo + "]";
        yield protractor_1.$(sel).click();
        yield protractor_1.element(protractor_1.by.buttonText('Cadastrar')).click();
        let findName = tipo + "Lista";
        let allNomes = protractor_1.element.all(protractor_1.by.name(findName));
        yield allNomes;
        let sameNomes = allNomes.filter(elem => elem.getText().then(text => text === nome));
        yield sameNomes;
        yield sameNomes.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    }));
    When(/^Eu tento cadastrar um alimento chamado "([^\"]*)" com tipo "([^\"]*)"$/, (nome, tipo) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.$("input[name='alimentoNome']").sendKeys(nome);
        let sel = "#alimentoTipo option[value=" + tipo + "]";
        yield protractor_1.$(sel).click();
        yield protractor_1.element(protractor_1.by.buttonText('Cadastrar')).click();
    }));
    Then(/^Eu recebo uma mensagem de "([^\"]*)"$/, (mensagem) => __awaiter(this, void 0, void 0, function* () {
        let allMSG = protractor_1.element.all(protractor_1.by.name('mensagemCardapio'));
        yield allMSG;
        let sameMSG = allMSG.filter(elem => elem.getText().then(text => text === mensagem));
        yield sameMSG;
        yield sameMSG.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    }));
    Then(/^Posso ver o alimento "([^\"]*)" na lista de alimentos oferecidos para "([^\"]*)"$/, (nome, tipo) => __awaiter(this, void 0, void 0, function* () {
        let findName = tipo + "Lista";
        let allNomes = protractor_1.element.all(protractor_1.by.name(findName));
        yield allNomes;
        let sameNomes = allNomes.filter(elem => elem.getText().then(text => text === nome));
        yield sameNomes;
        yield sameNomes.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    }));
});
