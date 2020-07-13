import { Component } from '@angular/core';
import { WorkoutService } from '../common/services/workout.service';
import { Exercise } from '../common/interfaces/exercise.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent {

  constructor(
    private workoutService: WorkoutService,
    private router: Router ) { }

  finalList = [];
  exerciseList = [
    {
      id: 0,
      name: 'REST',
      videoUrl: '',
      targetMuscles: []
    },
    {
      id: 1,
      name: 'Dumbbell Bench Press',
      videoUrl: 'https://www.youtube.com/embed/wzq57DB5Ppg',
      targetMuscles: ['Triceps', 'Chest']
    },
    {
      id: 2,
      name: 'Shoulder Press',
      videoUrl: 'https://www.youtube.com/embed/VF-YjKlhph0',
      targetMuscles: ['Shoulders']
    },
    {
      id: 3,
      name: 'Bicep Curl',
      videoUrl: 'https://www.youtube.com/embed/uO_CNYidOw0',
      targetMuscles: ['Biceps']
    },
    {
      id: 4,
      name: 'Chin-ups',
      videoUrl: 'https://www.youtube.com/embed/FOpl3-FZmyE',
      targetMuscles: ['Biceps', 'Back']
    },
    {
      id: 5,
      name: 'Overhead Cable Tricep Extension',
      videoUrl: 'https://www.youtube.com/embed/ns-RGsbzqok',
      targetMuscles: ['Triceps']
    },
    {
      id: 6,
      name: 'Inclined Dumbbell Bench Press',
      videoUrl: 'https://www.youtube.com/embed/0G2_XV7slIg',
      targetMuscles: ['Chest', 'Triceps', 'Shoulders']
    },
    {
      id: 7,
      name: 'Push-ups',
      videoUrl: 'https://www.youtube.com/embed/Eh00_rniF8E',
      targetMuscles: ['Chest', 'Triceps']
    },
    {
      id: 8,
      name: 'Crunches',
      videoUrl: 'https://www.youtube.com/embed/Xyd_fa5zoEU',
      targetMuscles: ['Abs']
    },
    {
      id: 9,
      name: 'Flutter Kicks',
      videoUrl: 'https://www.youtube.com/embed/FnBkO8mmuxo',
      targetMuscles: ['Abs']
    }
  ];

  restList = [this.exerciseList[0]];

  bicepList = this.exerciseList.filter(ex => {
    return ex.targetMuscles.includes('Biceps');
  });

  tricepList = this.exerciseList.filter(ex => {
    return ex.targetMuscles.includes('Triceps');
  });

  chestList = this.exerciseList.filter(ex => {
    return ex.targetMuscles.includes('Chest');
  });

  shoulderList = this.exerciseList.filter(ex => {
    return ex.targetMuscles.includes('Shoulders');
  });

  abList = this.exerciseList.filter(ex => {
    return ex.targetMuscles.includes('Abs');
  });

  addExerciseToWorkout(exerciseInfo) {
    const { id, reps } = exerciseInfo;
    const exercise:any = Object.assign({}, this.exerciseList.find(exercise => exercise.id === id));
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
