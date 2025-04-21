import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodCalculatorComponent } from './food-calculator.component';

describe('FoodCalculatorComponent', () => {
  let component: FoodCalculatorComponent;
  let fixture: ComponentFixture<FoodCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodCalculatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
