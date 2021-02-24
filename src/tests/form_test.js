const { I } = inject();
const { formPO } = require('../pageObjects');

Feature('Form').tag('@form');

Scenario('Select random radio buttons', () => {
    I.amOnPage(`${process.env.BASE_URL}/form`);
    let getRandomRadioOption = () => {
        let random = Math.floor(Math.random() * 2);
        return random === 0 ? 'radioNo' : 'radioYes';
    };

    I.waitForElement(formPO.locators.general1_1, process.env.TIME_OUT);
    I.click(`${formPO.locators.general1_1} ${formPO.locators.radioButton} [data-testid="${getRandomRadioOption()}"]`);
    I.click(`${formPO.locators.general1_2} ${formPO.locators.radioButton} [data-testid="${getRandomRadioOption()}"]`);
    I.click(`${formPO.locators.general1_3} ${formPO.locators.radioButton} [data-testid="${getRandomRadioOption()}"]`);
    I.click(`${formPO.locators.riskFactors2_1} ${formPO.locators.radioButton} [data-testid="${getRandomRadioOption()}"]`);
    I.click(`${formPO.locators.riskFactors2_2} ${formPO.locators.radioButton} [data-testid="${getRandomRadioOption()}"]`);
    I.click(`${formPO.locators.riskFactors2_2E} ${formPO.locators.radioButton} [data-testid="${getRandomRadioOption()}"]`);
    
}).tag('@smoke');

Scenario('Select 5th dropdown element', () => {
    I.amOnPage(`${process.env.BASE_URL}/questionnariePage`);
    I.waitForElement(formPO.locators.dropdown, process.env.TIME_OUT);
    I.click(formPO.locators.dropdown);
    I.click(formPO.locators.fiveThDropdownElement);
}).tag('@smoke');
