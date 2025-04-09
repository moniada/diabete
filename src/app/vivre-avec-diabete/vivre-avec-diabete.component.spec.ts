import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VivreAvecDiabeteComponent } from './vivre-avec-diabete.component';

describe('VivreAvecDiabeteComponent', () => {
  let component: VivreAvecDiabeteComponent;
  let fixture: ComponentFixture<VivreAvecDiabeteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VivreAvecDiabeteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VivreAvecDiabeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
