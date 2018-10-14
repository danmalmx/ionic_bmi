import { Calculator } from './app.po';

describe('App', () => {
  let calulator: Calculator;

  beforeEach(() => {
    calulator = new Calculator();
  });

  describe('default screen', () => {
    beforeEach(() => {
        calulator.navigateTo('/');
    });

    it('should have a title saying calculator', () => {
        calulator.getPageOneTitleText().then(title => {
        expect(title).toEqual('calculator');
      });
    });

    it('should have an input field weight', () => {
      calulator.weightInput().then(weight => {
      expect(weight).toEqual('Weight (kg)');
    });
  });

  })

    it('fill in form', () => {
        calulator.fillInForm(70, 170);
        expect(calulator.results_card_header()).toContain('BMI Calculations');
        expect(calulator.results_card_content()).toContain('BMI: 24.22, You are Normal');
    });
});