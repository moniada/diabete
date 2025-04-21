import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestCeQueLeDiabeteComponent } from './quest-ce-que-le-diabete.component';

describe('QuestCeQueLeDiabeteComponent', () => {
  let component: QuestCeQueLeDiabeteComponent;
  let fixture: ComponentFixture<QuestCeQueLeDiabeteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuestCeQueLeDiabeteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuestCeQueLeDiabeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
