import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));

let sameCPF = ((elem, cpf) => elem.element(by.name('cpflist')).getText().then(text => text === cpf));
let sameName = ((elem, name) => elem.element(by.name('nomelist')).getText().then(text => text === name));

let pAND = ((p,q) => p.then(a => q.then(b => a && b)))

defineSupportCode(function ({ Given, When, Then }) {
    Given(/^I’m logged successfully and at main page.$/, async () => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal('RU Express');
    });

    When(/^I go to queue monitoring page.$/, async () => {
        await $("a[id='fila']").click();
    });

    Then(/^I see the ([^\s]*) ([^.]*).$/, async function (typeOf,instanceOf) {
        let returner : boolean = false;
        switch (typeOf) {
            case "estimated":
                    switch (instanceOf) {
                        case "waiting time":
                                expect(await $("p[id='waitingTime']").getText() != null).to.equal(true);
                            break;
                        case "number of persons in line":
                                expect(await parseInt((await $("p[id='queuePeople']").getText()).split(" ")[0]) > -1).to.equal(true);
                            break;
                        case "best time to go":
                                expect(await $("p[id='bestTime']").getText() != null).to.equal(true);
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
                    }
                break;
        }
        return returner;
    });
})