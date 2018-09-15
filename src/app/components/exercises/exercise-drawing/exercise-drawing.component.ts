import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise-drawing',
  templateUrl: './exercise-drawing.component.html',
  styleUrls: ['./exercise-drawing.component.css']
})
export class ExerciseDrawingComponent implements OnInit {

  constructor() { }

  exerciseStarted = false;

  ngOnInit() {
  }

  onStartExercise() {
    this.exerciseStarted = true;
    console.log('start exercise');
  }

}
