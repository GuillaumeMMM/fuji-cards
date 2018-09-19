import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-exercise-drawing',
  templateUrl: './exercise-drawing.component.html',
  styleUrls: ['./exercise-drawing.component.css']
})
export class ExerciseDrawingComponent implements OnInit {

  constructor(public dataService: DataService) { }

  activeSetting = 'summary';
  exercise: any;

  ngOnInit() {
    this.exercise = this.dataService.getExercises().filter((ex) => {
      return ex.name === 'Drawing';
    })[0];
  }

  onStartExercise() {
    console.log('start exercise');
  }

  summaryClicked(event) {
    this.activeSetting = 'summary';

    const activeElement = document.getElementsByClassName('active')[0];
    activeElement.classList.remove('active');
    const clickedElement = event.target;
    clickedElement.classList.add('active');
  }

  exerciseSettingsClicked(event) {
    this.activeSetting = 'exercise-settings';
    const activeElement = document.getElementsByClassName('active')[0];
    activeElement.classList.remove('active');
    const clickedElement = event.target;
    clickedElement.classList.add('active');
  }

  languageSettingsClicked(event) {
    this.activeSetting = 'language-settings';
    const activeElement = document.getElementsByClassName('active')[0];
    activeElement.classList.remove('active');
    const clickedElement = event.target;
    clickedElement.classList.add('active');
  }
}
