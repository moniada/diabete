import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessSugarComponent } from './guess-sugar.component';

describe('GuessSugarComponent', () => {
  let component: GuessSugarComponent;
  let fixture: ComponentFixture<GuessSugarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuessSugarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuessSugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
