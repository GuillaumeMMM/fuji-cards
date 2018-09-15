import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ExercisesComponent } from './components/exercises/exercises.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ExerciseComponent } from './components/exercises/exercise/exercise.component';

import { DataService } from './services/data.service';
import { ExerciseDrawingComponent } from './components/exercises/exercise-drawing/exercise-drawing.component';
import { DrawingCanvasComponent } from './components/exercises/exercise-drawing/drawing-canvas/drawing-canvas.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'exercises', component: ExercisesComponent },
  { path: 'exercise-drawing', component: ExerciseDrawingComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ExercisesComponent,
    HomeComponent,
    PageNotFoundComponent,
    ExerciseComponent,
    ExerciseDrawingComponent,
    DrawingCanvasComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true }
    )
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
