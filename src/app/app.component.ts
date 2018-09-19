import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  activeRoute = {route: '/home', name: 'Home'};

  routesNames = [
    {path: 'home', name: 'Home'},
    {path: 'exercises', name: 'Exercises'},
    {path: 'exercise-drawing', name: 'Drawing Exercise'},
    {path: '', name: 'Home'},
  ];

  constructor(public router: Router) { }

  ngOnInit() {
    // console.log('init', this.router);
    // console.log(window.location.pathname);
    this.routesNames.forEach(route => {
      if ('/' + route.path === window.location.pathname) {
        this.activeRoute.route = '/' + route.path;
        this.activeRoute.name = route.name;
      }
    });
    // this.activeRoute.route = window.location.pathname;
  }
}
