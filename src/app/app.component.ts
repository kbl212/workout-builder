import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

interface Exercise {
  id: number;
  name: string;
  videoUrl: string;
  targetMuscles: string[];
  repCount?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public sanitizer: DomSanitizer) {}
  finalList = [];
  workoutList = [
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

  restList = [this.workoutList[0]];

  bicepList = this.workoutList.filter(ex => {
    return ex.targetMuscles.includes('Biceps');
  });

  tricepList = this.workoutList.filter(ex => {
    return ex.targetMuscles.includes('Triceps');
  });

  chestList = this.workoutList.filter(ex => {
    return ex.targetMuscles.includes('Chest');
  });

  shoulderList = this.workoutList.filter(ex => {
    return ex.targetMuscles.includes('Shoulders');
  });

  abList = this.workoutList.filter(ex => {
    return ex.targetMuscles.includes('Abs');
  });

  videoList = [];

  selectedWorkout = 0;
  getSelectedWorkoutUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.videoList[this.selectedWorkout].videoUrl);
  }

  selectWorkout(index) {
    if (index !== this.selectedWorkout) {
      console.log('uhhh');
      this.selectedWorkout = index;
    }
    console.log('lol');
  }

  goToNextExercise() {
    if (this.selectedWorkout !== this.videoList.length - 1) {
      this.selectedWorkout++;
    }
  }

  goToPreviousExercise() {
    if (this.selectedWorkout !== 0) {
      this.selectedWorkout--;
    }
  }

  addExerciseToWorkout(id, reps) {
    const exercise:any = this.workoutList.find(exercise => exercise.id === id);
    exercise.repCount = reps;
    this.finalList.push(this.workoutList.find(exercise => exercise.id === id));
  }

  removeExerciseFromWorkout(index) {
    this.finalList.splice(index, 1);
  }

  createWorkout() {
    this.videoList = this.finalList.slice();
  }
  
}
