import { browser, by, element } from 'protractor';

export class Calculator {

beforeEach() {
}   
  navigateTo(destination) {
    return browser.get(destination);
  }

  getTitle() {
    return browser.getTitle();
  }

  getPageOneTitleText() {
    return element(by.tagName('calculator')).element(by.tagName('ion-title')).getText();
  }

  getButtonText() {
    return element(by.tagName('page-calculator')).element(by.id('clc')).getText();
  }

  weightInput() {
    return element(by.id('kg')).getText();
  }

  heightInput() {
    return element(by.id('cm')).getText();
  }

  fillInForm(weight, height) {

    element(by.css('.text-input')).clear().then(() => {
        element(by.css('.text-input')).sendKeys(weight);
    }) 

    element(by.css('.text-input')).clear().then(() => {
      element(by.css('.text-input')).sendKeys(height);
  }) 

    element(by.cssContainingText('.button', 'Calculate')).click();
  }

results_card_header() {
    return element(by.css('ion-card-header')).getText();
} 

results_card_content() {
    return element(by.css('ion-card-content')).getAttribute('textContent');
} 
}