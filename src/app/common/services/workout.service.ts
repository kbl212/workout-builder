import { Injectable } from '@angular/core';
import { Exercise } from '../interfaces/exercise.interface';
import { Workout } from '../interfaces/workout.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  _url: string = '/assets/data/exercises.json';
  workoutMap = {};
  constructor(private http: HttpClient) { }

  getExerciseList(): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(this._url);
  }

  createWorkout(exerciseList: Exercise[]): Workout {
    const workout: Workout = {
      id: Math.floor(Math.random() * 1000), // TODO: Make a POST request, and generate this id on the server
      exercises: exerciseList
    }
    this.workoutMap[workout.id] = workout;
    return this.workoutMap[workout.id];
  }

  getWorkoutById(id: string): Workout {
    // TODO: Make GET request to server. When calling this method, first check map (cache).
    // If (id in workoutMap), just return that. else, make API call, cache, then return.
    return this.workoutMap[id];
  }
}
