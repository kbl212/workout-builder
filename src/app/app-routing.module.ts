import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExercisesComponent } from './exercises/exercises.component';
import { WorkoutComponent } from './workout/workout.component';


const routes: Routes = [
  { path: 'create', component: ExercisesComponent },
  { path: 'workout/:id', component: WorkoutComponent },
  { path: '**', redirectTo: '/create' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
