import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseDrawingComponent } from './exercise-drawing.component';

describe('ExerciseDrawingComponent', () => {
  let component: ExerciseDrawingComponent;
  let fixture: ComponentFixture<ExerciseDrawingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseDrawingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseDrawingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
