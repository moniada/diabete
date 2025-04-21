import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SugarCatchComponent } from './sugar-catch.component';

describe('SugarCatchComponent', () => {
  let component: SugarCatchComponent;
  let fixture: ComponentFixture<SugarCatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SugarCatchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SugarCatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
