import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoriageComponent } from './coloriage.component';

describe('ColoriageComponent', () => {
  let component: ColoriageComponent;
  let fixture: ComponentFixture<ColoriageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColoriageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColoriageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
