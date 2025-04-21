import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SugarChallengeComponent } from './sugar-challenge.component';

describe('SugarChallengeComponent', () => {
  let component: SugarChallengeComponent;
  let fixture: ComponentFixture<SugarChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SugarChallengeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SugarChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
