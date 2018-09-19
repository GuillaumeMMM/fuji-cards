import { Component, OnInit, Input } from '@angular/core';

import * as anime from '../../../../../../node_modules/animejs/anime';

@Component({
  selector: 'app-exercise-summary',
  templateUrl: './exercise-summary.component.html',
  styleUrls: ['./exercise-summary.component.css']
})
export class ExerciseSummaryComponent implements OnInit {

  @Input() exercise: any;

  constructor() { }

  ngOnInit() {
    console.log(this.exercise);
  }

  mouseOverSummaryCard(event) {
    const target = event.target;
    anime.remove(target);
    const cardAnimation = anime({
      targets: target,
      translateX: 8,
      fontSize: '30px',
    });
  }

  mouseOutSummaryCard(event) {
    const target = event.target;
    anime.remove(target);
    const cardAnimation = anime({
      targets: target,
      translateX: 0,
      fontSize: '60px',
    });
  }

}
