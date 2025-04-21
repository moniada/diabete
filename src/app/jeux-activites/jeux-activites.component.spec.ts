import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuxActivitesComponent } from './jeux-activites.component';

describe('JeuxActivitesComponent', () => {
  let component: JeuxActivitesComponent;
  let fixture: ComponentFixture<JeuxActivitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JeuxActivitesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JeuxActivitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
