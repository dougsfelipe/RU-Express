import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));

let sameCPF = ((elem, cpf) => elem.element(by.name('cpflist')).getText().then(text => text === cpf));
let sameName = ((elem, name) => elem.element(by.name('nomelist')).getText().then(text => text === name));

let pAND = ((p,q) => p.then(a => q.then(b => a && b)))

defineSupportCode(function ({ Given, When, Then }) {
    Given(/^I’m logged successfully and at ([^.]*) page.$/, async (typeOf) => {
        switch (typeOf) {
            case "main":
                    await browser.get("http://localhost:4200/");
                    await expect(browser.getTitle()).to.eventually.equal('RU Express');
                break;
            case "queue monitoring":
                    await browser.get("http://localhost:4200/");
                    await expect(browser.getTitle()).to.eventually.equal('RU Express');
                    await $("a[id='fila']").click();
                break;
        }
    });

    Given(/^I’m at ([^.]*) state.$/, async (typeOf) => {
        switch (typeOf) {
            case "line":
                    await browser.get("http://localhost:4200/");
                    await expect(browser.getTitle()).to.eventually.equal('RU Express');
                    await $("a[id='fila']").click();
                    await $("button[id='atLine']").click();
                break;
            case "zero countdown":
                break;
        }
    });

    When(/^Do ([^\s]*) ([^.]*).$/, async (typeOf, instanceOf) => {
        switch (typeOf) {
            case "go":
                    await $("a[id='fila']").click();
                break;
            case "actualize":
                    await $("button[id='actualize']").click();
                break;
            case "select":
                    switch (instanceOf) {
                        case "I’m in line option":
                                await $("button[id='atLine']").click();
                            break;
                        case "I'm entering the restaurant option":
                                await $("button[id='enteredRestaurant']").click();
                            break;
                        case "I'm leaving the line option":
                                await $("button[id='leavingLine']").click();
                            break;
                    }
                break;
        }
    });

    Then(/^I see the ([^\s]*) ([^.]*).$/, async function (typeOf,instanceOf) {
        switch (typeOf) {
            case "estimated":
                    switch (instanceOf) {
                        case "waiting time":
                                expect(await $("p[id='waitingTime']").getText() != null).to.equal(true);
                            break;
                        case "waiting time countdown":
                                expect(await RegExp('^(\d* dia[s?],)? (\d* hora[s?],)? (\d* minuto[s?],)? ?\d* segundo[s?]$').test(await $("p[id='waitingTime']").getText()));
                            break;
                        case "number of persons in line":
                                expect(await parseInt((await $("p[id='queuePeople']").getText()).split(" ")[0]) > -1).to.equal(true);
                            break;
                        case "best time to go":
                                expect(await $("p[id='bestTime']").getText() != null).to.equal(true);
                            break;
                        case "best time to go as a sentence saying I’m in line":
                                expect(await $("p[id='bestTime']").getText() == "Já está na fila.").to.equal(true);
                            break;
                    }
                break;
            case "option":
                    switch (instanceOf) {
                        case "to actualize":
                                await $("button[id='actualize']");
                            break;
                        case "to say I'm in line":
                                await $("button[id='atLine']");
                            break;
                        case "to say I’m leaving the line":
                                await $("button[id='leavingLine']");
                            break;
                        case "to say I’m entering the restaurant":
                                await $("button[id='enteredRestaurant']");
                            break;
                    }
                break;
        }
    });
})