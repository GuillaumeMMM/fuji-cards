import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {

  exercises = [];

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.exercises = this.dataService.getExercises();
    console.log(this.exercises);
  }

}
