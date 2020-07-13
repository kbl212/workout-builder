import { Injectable } from '@angular/core';
import { Exercise } from '../interfaces/exercise.interface';
import { Workout } from '../interfaces/workout.interface';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  workoutMap = {};
  constructor() { }

  createWorkout(exerciseList: Exercise[]) {
    const workout: Workout = {
      id: Math.floor(Math.random() * 1000), // TODO: Generate this id on the server
      exercises: exerciseList
    }
    this.workoutMap[workout.id] = workout;
    return this.workoutMap[workout.id];
  }

  getWorkoutById(id: string) {
    // TODO: Add API call to server. When calling this method, first check map (cache).
    // If (id in workoutMap), just return that. else, make API call, cache, then return.
    return this.workoutMap[id];
  }
}
