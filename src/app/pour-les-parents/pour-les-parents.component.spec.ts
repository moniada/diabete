import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PourLesParentsComponent } from './pour-les-parents.component';

describe('PourLesParentsComponent', () => {
  let component: PourLesParentsComponent;
  let fixture: ComponentFixture<PourLesParentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PourLesParentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PourLesParentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
