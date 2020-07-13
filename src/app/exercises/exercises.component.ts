import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../common/services/workout.service';
import { Exercise } from '../common/interfaces/exercise.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent implements OnInit {
  finalList: Exercise[] = [];
  exerciseList: Exercise[] = [];
  restList: Exercise[] = [];
  bicepList: Exercise[] = [];
  tricepList: Exercise[] = [];
  chestList: Exercise[] = [];
  shoulderList: Exercise[] = [];
  abList: Exercise[] = [];

  constructor(
    private workoutService: WorkoutService,
    private router: Router ) { }

  ngOnInit() {
    this.workoutService.getExerciseList()
      .subscribe(exercises => {
        this.exerciseList = exercises;

        this.restList = [this.exerciseList[0]];

        this.bicepList = this.exerciseList.filter(ex => {
          return ex.targetMuscles.includes('Biceps');
        });

        this.tricepList = this.exerciseList.filter(ex => {
          return ex.targetMuscles.includes('Triceps');
        });

        this.chestList = this.exerciseList.filter(ex => {
          return ex.targetMuscles.includes('Chest');
        });

        this.shoulderList = this.exerciseList.filter(ex => {
          return ex.targetMuscles.includes('Shoulders');
        });

        this.abList = this.exerciseList.filter(ex => {
          return ex.targetMuscles.includes('Abs');
        });
      });
  }

  addExerciseToWorkout(exerciseInfo) {
    const { id, reps } = exerciseInfo;
    const exercise: Exercise = Object.assign({}, this.exerciseList.find(exercise => exercise.id === id));
    exercise.repCount = reps;
    this.finalList.push(exercise);
  }

  removeExerciseFromWorkout(index) {
    this.finalList.splice(index, 1);
  }

  createWorkout() {
    const finalWorkout = this.workoutService.createWorkout(this.finalList);
    this.router.navigateByUrl(`workout/${finalWorkout.id}`);
  }

}
