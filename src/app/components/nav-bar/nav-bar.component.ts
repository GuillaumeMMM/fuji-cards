import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  menuDisplayed = false;

  constructor() { }

  ngOnInit() {
  }

  displayMenu() {
    const menuElementsContainers = document.getElementsByClassName('nav-li-item');
    const menuElements = document.getElementsByClassName('nav-item');
    if (!this.menuDisplayed) {
      this.menuDisplayed = true;

      for (let i = 0; i < menuElementsContainers.length; i++) {
        menuElementsContainers[i]['style'].backgroundColor = '#f4f4f4';
      }

      for (let i = 0; i < menuElements.length; i++) {
        menuElements[i]['style'].visibility = 'visible';
      }
    } else {
      this.menuDisplayed = false;
      for (let i = 0; i < menuElementsContainers.length; i++) {
        menuElementsContainers[i]['style'].backgroundColor = 'transparent';
      }

      for (let i = 0; i < menuElements.length; i++) {
        menuElements[i]['style'].visibility = 'hidden';
      }
    }
  }
}
