import { browser, by, element } from 'protractor';

export class Calculator {

  navigateTo(destination) {
    return browser.get(destination);
  }

  getTitle() {
    return browser.getTitle();
  }

  getPageOneTitleText() {
    return element(by.tagName('calculator')).element(by.tagName('ion-title')).getText();
  }

  weightInput() {
    return element(by.id('lbl-0')).getText();  }

  heightInput() {
    return element(by.tagName('Height (cm)')).element(by.tagName('ion-label')).getText();
  }

  fillInForm(weight, height) {

    element(by.css('.text-input')).clear().then(() => {  // first we need to clear the default value
        element(by.css('.text-input')).sendKeys(weight); // fill in the weight
    }) 

    element(by.css('.select')).click().then(() => {  // find the dropdown and click on it
        browser.sleep(500); // we sleep for a half a second to make sure the popup has popped up

        element(by.css('.text-input')).sendKeys(height); // click the height option you want
        // element(by.cssContainingText('.button-inner', 'Calculate')).click();  // click the Calculate button

    })

    browser.sleep(500); // we sleep for half a second to make sure the popup has disappeared

    element(by.cssContainingText('.button', 'Calculate')).click();  // click the calculate button

}

results_card_header() {
    return element(by.css('ion-card-header')).getText();
} 

results_card_content() {
    return element(by.css('ion-card-content')).getAttribute('textContent');
} 
}