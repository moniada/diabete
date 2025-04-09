import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeRaceComponent } from './bike-race.component';

describe('BikeRaceComponent', () => {
  let component: BikeRaceComponent;
  let fixture: ComponentFixture<BikeRaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BikeRaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BikeRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
