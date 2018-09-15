import { Component, OnInit, Input } from '@angular/core';

import * as anime from '../../../../node_modules/animejs/anime';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  menuDisplayed = false;

  @Input() activeRoute: Object;

  constructor() { }

  ngOnInit() {
    // console.log(this.activeRoute);
  }

  displayMenu() {
    const menuElementsContainers = document.getElementsByClassName('nav-li-item');
    const menuElements = document.getElementsByClassName('nav-item');
    const burger = document.getElementsByClassName('fa-bars');

    if (!this.menuDisplayed) {
      this.menuDisplayed = true;

      const burgerRotation = anime({
        targets: burger,
        rotate: {value: '0.25turn', duration: 1000},
      });

      for (let i = 0; i < menuElementsContainers.length; i++) {
        menuElementsContainers[i]['style'].backgroundColor = 'rgba(0, 0, 0, 0.6)';
        menuElements[i]['style'].color = 'white';

        menuElementsContainers[i]['style'].marginTop = '-1px';
      }

      for (let i = 0; i < menuElements.length; i++) {
        menuElements[i]['style'].visibility = 'visible';
      }
    } else {

      const burgerRotation = anime({
        targets: burger,
        rotate: {value: '0turn', duration: 1000},
      });

      this.menuDisplayed = false;
      for (let i = 0; i < menuElementsContainers.length; i++) {
        menuElementsContainers[i]['style'].backgroundColor = 'transparent';
      }

      for (let i = 0; i < menuElements.length; i++) {
        menuElements[i]['style'].visibility = 'hidden';
      }
    }
  }

  mouseOverAtive() {
    const active = document.getElementsByClassName('current-text');
    const currentLinkTranslation = anime({
      targets: active,
      translateX: -20
    });
  }

  mouseOutAtive() {
    const active = document.getElementsByClassName('current-text');
    const currentLinkTranslation = anime({
      targets: active,
      translateX: 0
    });
  }
}
