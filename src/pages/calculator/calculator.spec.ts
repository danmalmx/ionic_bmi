import { HomePage } from "./home";
import { TestBed, async } from "@angular/core/testing";
import { IonicModule, Platform, NavController } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { PlatformMock, StatusBarMock, SplashScreenMock, NavControllerMock } from "ionic-mocks";
import { CalculatorPage } from "./calculator";

describe("HomePage", () => {
  let homepage;
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
        { provide: NavController, useFactory: () => NavControllerMock.instance() }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorPage);
    calculatorpage = fixture.componentInstance;
  });

  it("should create the home page", () => {
    expect(calculatorpage).toBeTruthy();
    expect(calculatorpage instanceof CalculatorPage).toEqual(true);
  });

  it('should have default values', () => {
    expect(homepage).toEqual({ weight: 70, height: 170 });
  });

  it('should have calculate function', () => {
    spyOn(homepage, 'calculate'); // we use jasmine to spy on a function

    homepage.calculate()

    expect(homepage.calculate).toHaveBeenCalled(); // check if the function has been called
  });
});