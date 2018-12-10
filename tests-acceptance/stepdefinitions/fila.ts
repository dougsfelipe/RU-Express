import { defineSupportCode } from 'cucumber';
import {browser, $, element, ElementArrayFinder, by, protractor} from 'protractor';
import {reject, resolve} from "q";
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

//TESTS REALIZED WITHOUT NEED TO LOGIN!!!!!!!!!

defineSupportCode(function ({ Given, When, Then }) {
    Given(/^I’m logged successfully and at ([^.]*) page.$/, async (typeOf) => {
        switch (typeOf) {
            case "main":
                    await browser.get("http://localhost:4200/");
                    await expect(browser.getTitle()).to.eventually.equal('RU Express');
                break;
            case "queue monitoring":
                    await browser.get("http://localhost:4200/fila");
                    await expect(browser.getTitle()).to.eventually.equal('RU Express');
                break;
        }
    });

    Given(/^I’m at ([^.]*) state.$/, async (typeOf) => {
        switch (typeOf) {
            case "line":
                    await browser.get("http://localhost:4200/");
                    await expect(browser.getTitle()).to.eventually.equal('RU Express');
                    await $("a[id='fila']").click();
                    await $("button[name='atLine']").click();
                break;
            case "zero countdown":
                    await browser.get("http://localhost:4200/");
                    await expect(browser.getTitle()).to.eventually.equal('RU Express');
                    await $("a[id='fila']").click();
                    await $("button[name='atLine']").click();
                    browser.wait(protractor.ExpectedConditions.visibilityOf($("div[class='modalDialog']")),7000);
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
                                await $("button[name='atLine']").click();
                            break;
                        case "I'm entering the restaurant option":
                                await $("button[name='enteredRestaurant']").click();
                            break;
                        case "I'm leaving the line option":
                                await $("button[name='leavingLine']").click();
                            break;
                        case "after zero countdown I’m in line option":
                                await browser.wait(protractor.ExpectedConditions.visibilityOf($("div[class='modalDialog']")),6000);
                                await $("button[name='atLine']").click();
                            break;
                        case "after zero countdown I'm entering the restaurant option":
                                await browser.wait(protractor.ExpectedConditions.visibilityOf($("div[class='modalDialog']")),6000);
                                await $("button[name='enteredRestaurant']").click();
                            break;
                        case "after zero countdown I'm leaving the line option":
                                await browser.wait(protractor.ExpectedConditions.visibilityOf($("div[class='modalDialog']")),6000);
                                await $("button[name='leavingLine']").click();
                            break;
                    }
                break;
            case "countdown":
                    await browser.wait(protractor.ExpectedConditions.visibilityOf($("div[class='modalDialog']")),6000);
                break;
        }
    });

    Then(/^I see the ([^\s]*) ([^.]*).$/, async function (typeOf,instanceOf) {
        switch (typeOf) {
            case "estimated":
                    switch (instanceOf) {
                        case "waiting time":
                                await browser.wait(protractor.ExpectedConditions.visibilityOf($("div[class='queueMonitoring']")),5000);
                                expect(await $("p[id='waitingTime']").getText() != null).to.equal(true);
                            break;
                        case "waiting time countdown":
                                await browser.wait(protractor.ExpectedConditions.visibilityOf($("div[class='queueMonitoring']")),5000);
                                expect(await RegExp('^(\d* dia[s?],)? (\d* hora[s?],)? (\d* minuto[s?],)? ?\d* segundo[s?]$').test(await $("p[id='waitingTime']").getText()));
                            break;
                        case "waiting time as a sentence saying I’ve passed the limit of normal waiting":
                                await browser.wait(protractor.ExpectedConditions.visibilityOf($("div[class='queueMonitoring']")),5000);
                                expect(await $("p[id='waitingTime']").getText() == "Tempo limite estourado e ainda na fila!").to.equal(true);
                            break;
                        case "number of persons in line":
                                await browser.wait(protractor.ExpectedConditions.visibilityOf($("div[class='queueMonitoring']")),5000);
                                expect(await parseInt(await ( await $("p[id='queuePeople']").getText()).split(" ")[0]) > -1).to.equal(true);
                            break;
                        case "best time to go":
                                await browser.wait(protractor.ExpectedConditions.visibilityOf($("div[class='queueMonitoring']")),5000);
                                expect(await $("p[id='bestTime']").getText() != null).to.equal(true);
                            break;
                        case "best time to go as a sentence saying I’m in line":
                                await browser.wait(protractor.ExpectedConditions.visibilityOf($("div[class='queueMonitoring']")),5000);
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
                                await $("button[name='atLine']");
                            break;
                        case "to say I’m leaving the line":
                                await $("button[name='leavingLine']");
                            break;
                        case "to say I’m entering the restaurant":
                                await $("button[name='enteredRestaurant']");
                            break;
                    }
                break;
            case "message":
                    await $("h2[id='messageTimeOverflow']");
                break;
        }
    });
})