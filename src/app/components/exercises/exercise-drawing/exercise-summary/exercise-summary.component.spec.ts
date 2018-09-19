import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseSummaryComponent } from './exercise-summary.component';

describe('ExerciseSummaryComponent', () => {
  let component: ExerciseSummaryComponent;
  let fixture: ComponentFixture<ExerciseSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
