import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthMazeComponent } from './health-maze.component';

describe('HealthMazeComponent', () => {
  let component: HealthMazeComponent;
  let fixture: ComponentFixture<HealthMazeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HealthMazeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HealthMazeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
