import { TestBed, async } from "@angular/core/testing";
import { IonicModule, Platform, NavController, NavParams} from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { PlatformMock, StatusBarMock, SplashScreenMock, NavControllerMock, NavParamsMock } from "ionic-mocks";
import { CalculatorPage } from "./calculator";

describe("CalculatorPage", () => {
  let calculatorpage;
  let fixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CalculatorPage
      ],
      imports: [IonicModule.forRoot(CalculatorPage)],
      providers: [
          
        { provide: Platform, useFactory: () => PlatformMock.instance() },
        { provide: StatusBar, useFactory: () => StatusBarMock.instance() },
        { provide: SplashScreen, useFactory: () => SplashScreenMock.instance() },
        { provide: NavController, useFactory: () => NavControllerMock.instance() },
        { provide: NavParams, useFactory: () => NavParamsMock.instance() }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorPage);
    calculatorpage = fixture.componentInstance;
  });

  it("should create the calculator page", () => {
    expect(calculatorpage).toBeTruthy();
    expect(calculatorpage instanceof CalculatorPage).toEqual(true);
  });
  
  it("should create the NavParams", () => {
    expect(NavParams).toBeTruthy();
  });

  it("should create the Navcontroller", () => {
    expect(NavController).toBeTruthy();
  });

  it('should have default values', () => {
    expect(calculatorpage.calculateBMI).toEqual({ weight: 70, height: 170 });
  });

  it('should have calculate function', () => {
    spyOn(calculatorpage, 'calculateBMI'); 
  });

  it('should have a function that calculates BMI', () => { 
    calculatorpage.calculateBMI()

    calculatorpage.weight = 70
    calculatorpage.height = 170
    calculatorpage.bmiValue = 24.22
    calculatorpage.bmiMessage = 'Normal' 

    expect(calculatorpage.calculateBMI).toHaveBeenCalled();
  });

  it('should show Underweight if bmi is below 18.5', () => {
    calculatorpage.bmiValue = 18;
    calculatorpage.setBMIMessage();

    expect(calculatorpage.bmiMessage).toEqual('Underweight')
  });

  it('should show Normal if bmi is between 18.5 and 25', () => {
    calculatorpage.bmiValue = 23;
    calculatorpage.setBMIMessage();

    expect(calculatorpage.bmiMessage).toEqual('Normal')
  });

  it('should show overweight if bmi is between 25 and 30', () => {
    calculatorpage.bmiValue = 28;
    calculatorpage.setBMIMessage();

    expect(calculatorpage.bmiMessage).toEqual('Overweight')
  });

  it('should show overweight if bmi is over 30', () => {
    calculatorpage.bmiValue = 35;
    calculatorpage.setBMIMessage();

    expect(calculatorpage.bmiMessage).toEqual('Obese')
  });
});