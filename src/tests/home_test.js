const { I } = inject();
const { homePO } = require('../pageObjects');

Feature('Login').tag('@login');

Before(() => {
    I.amOnPage(process.env.BASE_URL);
    I.waitForElement(homePO.locators.emailInput, process.env.TIME_OUT);
    I.seeElement(homePO.locators.passwordInput);
    I.seeElement(homePO.locators.loginButton);
});

Scenario('Successful login', () => {
    I.fillField(homePO.locators.emailInput, 'test@test.com');
    I.fillField(homePO.locators.passwordInput, 'p4ssw0rd');
    I.click(homePO.locators.loginButton);
    I.waitForText(homePO.constants.success, process.env.TIME_OUT);
}).tag('@smoke');

Scenario('Invalid email message', () => {
    I.fillField(homePO.locators.emailInput, 'test.com');
    I.fillField(homePO.locators.passwordInput, 'p4ssw0rd');
    I.click(homePO.locators.loginButton);
    I.waitForText(homePO.constants.invalidEmail, process.env.TIME_OUT);
}).tag('@smoke');

Scenario('Enter correct email message', () => {
    I.fillField(homePO.locators.emailInput, 'notvalidemail@email.com');
    I.fillField(homePO.locators.passwordInput, 'p4ssw0rd');
    I.click(homePO.locators.loginButton);
    I.waitForText(homePO.constants.enterCorrectEmail, process.env.TIME_OUT);
}).tag('@smoke');
