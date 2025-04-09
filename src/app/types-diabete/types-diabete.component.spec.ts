import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesDiabeteComponent } from './types-diabete.component';

describe('TypesDiabeteComponent', () => {
  let component: TypesDiabeteComponent;
  let fixture: ComponentFixture<TypesDiabeteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TypesDiabeteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypesDiabeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
