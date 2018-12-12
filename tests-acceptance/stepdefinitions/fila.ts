import { defineSupportCode } from 'cucumber';
import {browser, $, element, ElementArrayFinder, by, protractor} from 'protractor';
import {reject, resolve} from "q";
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;


//TESTS REALIZED WITHOUT NEED TO LOGIN!!!!!!!!!

defineSupportCode(function ({ Given, When, Then }) {
    Given(/^I’m logged successfully and at ([^.]*) page.$/, async (typeOf) => {
        switch (typeOf) {
            case "RU Express":
                    await browser.get("http://localhost:4200/");
                    await expect(browser.getTitle()).to.eventually.equal('RU Express');
                break;
            case "queue monitoring":
                    await $("a[id='fila']").click();
                break;
        }
    });

    Given(/^I’m at ([^.]*) state.$/, async (typeOf) => {
        switch (typeOf) {
            case "line":
                    await $("button[name='atLine']").click();
                break;
            case "zero countdown":
                    await $("button[name='atLine']").click();
                    browser.wait(protractor.ExpectedConditions.presenceOf($("div[class='modalDialog']")));
                break;
        }
    });

    When(/^Do ([^\s]*) ([^.]*).$/, async (typeOf, instanceOf) => {
        switch (typeOf) {
            case "go":
                    await $("a[id='fila']").click();
                break;
            case "actualize":
                    $("button[name='actualize']").click();
                break;
            case "select":
                    switch (instanceOf) {
                        case "I’m in line option":
                                await browser.wait(protractor.ExpectedConditions.visibilityOf($("div[class='queueMonitoring']")));
                                $("button[name='atLine']").click();
                            break;
                        case "I'm entering the restaurant option":
                                await browser.wait(protractor.ExpectedConditions.visibilityOf($("div[class='queueMonitoring']")));
                                $("button[name='enteredRestaurant']").click();
                            break;
                        case "I'm leaving the line option":
                                await browser.wait(protractor.ExpectedConditions.visibilityOf($("div[class='queueMonitoring']")));
                                $("button[name='leavingLine']").click();
                            break;
                        case "after zero countdown I’m in line option":
                                $("button[name='atLine']").click();
                            break;
                        case "after zero countdown I'm entering the restaurant option":
                                $("button[name='enteredRestaurant']").click();
                            break;
                        case "after zero countdown I'm leaving the line option":
                                $("button[name='leavingLine']").click();
                            break;
                    }
                break;
            case "countdown":
                    await browser.wait(protractor.ExpectedConditions.visibilityOf($("div[class='modalDialog']")));
                break;
        }
    });

    Then(/^I see the ([^\s]*) ([^.]*).$/, async function (typeOf,instanceOf) {
        switch (typeOf) {
            case "estimated":
                    switch (instanceOf) {
                        case "waiting time":
                                await expect($("p[id='waitingTime']").getText().then(function (res:string):boolean {
                                    return res.match(/^[\d* dias?, ]?[\d* horas?, ]?[\d* minutos?, ]?\d* segundo[s?]$/).length > 0;
                                }));
                            break;
                        case "waiting time countdown":
                                await expect($("p[id='waitingTime']").getText().then(function (res:string):boolean {
                                    return res.match(/^Restante: ([^.]*)$/).length > 0;
                                }));
                            break;
                        case "waiting time as a sentence saying I’ve passed the limit of normal waiting":
                                await expect($("p[id='waitingTime']").getText().then(function (res:string):boolean {
                                    return res.match(/^Tempo limite estourado e ainda na fila!$/).length > 0;
                                }));
                            break;
                        case "number of persons in line":
                                await expect($("p[id='queuePeople']").getText().then(function (res:string):boolean {
                                    return res.match(/^\d* pessoas$/).length > 0;
                                }));
                            break;
                        case "best time to go":
                                await expect($("p[id='bestTime']").getText().then(function(res : string) : boolean {
                                    return res != null;
                                }));
                            break;
                        case "best time to go as a sentence saying I’m in line":
                                await expect($("p[id='bestTime']").getText().then(function(res : string) : boolean {
                                    return res.match(/^Já está na fila.$/).length > 0;
                                }));
                            break;
                    }
                break;
            case "option":
                    switch (instanceOf) {
                        case "to actualize":
                                await expect($("button[name='actualize']").isDisplayed().then(function (res:boolean):boolean {
                                    return res;
                                }));
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
                    await expect(await $("h2[id='messageTimeOverflow']").isDisplayed());
                break;
            case "need":
                    await browser.restart();
                break;
        }
    });
});